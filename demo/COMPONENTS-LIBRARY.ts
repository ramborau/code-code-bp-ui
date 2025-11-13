/**
 * =====================================================
 * ECME UI COMPONENTS LIBRARY - TypeScript Documentation
 * =====================================================
 *
 * Complete TypeScript reference for all UI components, utilities, and hooks
 * Technology Stack: TypeScript • React • Next.js 14+ • Tailwind CSS
 *
 * Primary Color: #00c307 (Vibrant Green)
 * Font: Inter
 *
 * @version 1.0.0
 * @author Ecme Team
 */

// =====================================================
// TYPE DEFINITIONS & INTERFACES
// =====================================================

import { ReactNode, CSSProperties, ComponentType, LazyExoticComponent } from 'react';
import { ApexOptions } from 'apexcharts';

/**
 * Common Props Interface
 * Shared across multiple components
 */
export interface CommonProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
  testId?: string;
}

/**
 * Size Variants
 * Standard sizing across components
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Color Variants
 * Standard color scheme
 */
export type ColorType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

/**
 * Theme Mode
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Direction (for RTL support)
 */
export type Direction = 'ltr' | 'rtl';

// =====================================================
// COMPONENTS LIBRARY
// =====================================================

/**
 * ===================
 * 1. ABBREVIATENUMBER
 * ===================
 *
 * Formats large numbers into readable abbreviated format
 *
 * @example
 * <AbbreviateNumber value={1500000} /> // Displays: 1.5M
 * <AbbreviateNumber value={2500} /> // Displays: 2.5K
 */

export interface AbbreviateNumberProps extends CommonProps {
  /** The number to abbreviate */
  value: number;
  /** Number of decimal places (default: 1) */
  decimals?: number;
  /** Custom suffix mapping */
  suffixes?: string[];
}

export const AbbreviateNumber: React.FC<AbbreviateNumberProps> = ({
  value,
  decimals = 1,
  suffixes = ['', 'K', 'M', 'B', 'T'],
  className
}) => {
  const abbreviate = (num: number): string => {
    if (num === 0) return '0';
    const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
    if (tier === 0) return num.toString();
    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;
    return scaled.toFixed(decimals) + suffix;
  };

  return <span className={className}>{abbreviate(value)}</span>;
};

/**
 * Usage Example:
 *
 * import AbbreviateNumber from '@/components/shared/AbbreviateNumber';
 *
 * const StatsCard = () => (
 *   <div>
 *     <h3>Total Users</h3>
 *     <AbbreviateNumber value={1247852} decimals={2} />
 *   </div>
 * );
 */

/**
 * ===================
 * 2. ACTIONLINK
 * ===================
 *
 * Styled link component with hover effects
 *
 * @example
 * <ActionLink href="/profile">View Profile</ActionLink>
 */

export interface ActionLinkProps extends CommonProps {
  /** Link destination */
  href: string;
  /** Link text */
  children: ReactNode;
  /** Open in new tab */
  external?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Usage Example:
 *
 * <ActionLink href="/docs" external>
 *   Read Documentation
 * </ActionLink>
 *
 * <ActionLink href="/settings" onClick={(e) => {
 *   e.preventDefault();
 *   navigate('/settings');
 * }}>
 *   Settings
 * </ActionLink>
 */

/**
 * ===================
 * 3. ADAPTIVECARD
 * ===================
 *
 * Responsive card component that adapts to screen size
 *
 * @example
 * <AdaptiveCard
 *   header="User Profile"
 *   footer={<Button>Save</Button>}
 * >
 *   <p>Card content here</p>
 * </AdaptiveCard>
 */

export interface AdaptiveCardProps extends CommonProps {
  /** Card header content */
  header?: ReactNode;
  /** Card footer content */
  footer?: ReactNode;
  /** Card body content */
  children: ReactNode;
  /** Enable shadow */
  shadow?: boolean;
  /** Enable border */
  bordered?: boolean;
  /** Padding size */
  padding?: Size;
}

/**
 * Usage Example:
 *
 * <AdaptiveCard
 *   header={<h2>Dashboard Stats</h2>}
 *   shadow
 *   bordered
 *   padding="lg"
 * >
 *   <div className="grid grid-cols-3 gap-4">
 *     <StatItem label="Users" value={1250} />
 *     <StatItem label="Revenue" value="$45K" />
 *     <StatItem label="Orders" value={892} />
 *   </div>
 * </AdaptiveCard>
 */

/**
 * ===================
 * 4. AFFIX
 * ===================
 *
 * Sticky positioning component
 * Makes content stick to viewport during scroll
 *
 * @example
 * <Affix offsetTop={20}>
 *   <Button>Sticky Button</Button>
 * </Affix>
 */

export interface AffixProps extends CommonProps {
  /** Distance from top when fixed */
  offsetTop?: number;
  /** Distance from bottom when fixed */
  offsetBottom?: number;
  /** Callback when affix state changes */
  onChange?: (affixed: boolean) => void;
  /** Target element to listen for scroll */
  target?: () => HTMLElement;
}

/**
 * Usage Example:
 *
 * <Affix offsetTop={80}>
 *   <Navigation />
 * </Affix>
 *
 * <Affix
 *   offsetBottom={20}
 *   onChange={(affixed) => console.log('Affixed:', affixed)}
 * >
 *   <FloatingActionButton />
 * </Affix>
 */

/**
 * ===================
 * 5. AUTHORITYCHECK
 * ===================
 *
 * Role-based access control component
 * Conditionally renders children based on user authority
 *
 * @example
 * <AuthorityCheck authority={['admin']}>
 *   <AdminPanel />
 * </AuthorityCheck>
 */

export interface AuthorityCheckProps {
  /** Required user roles */
  authority: string[];
  /** Content to render if authorized */
  children: ReactNode;
  /** Fallback content if unauthorized */
  fallback?: ReactNode;
  /** Current user role */
  userAuthority?: string[];
}

/**
 * Usage Example:
 *
 * <AuthorityCheck
 *   authority={['admin', 'moderator']}
 *   fallback={<p>Access Denied</p>}
 * >
 *   <AdminDashboard />
 * </AuthorityCheck>
 *
 * // With multiple authorities
 * <AuthorityCheck authority={['user']}>
 *   <UserProfile />
 * </AuthorityCheck>
 */

/**
 * ===================
 * 6. CALENDARVIEW
 * ===================
 *
 * Full-featured calendar component
 * Supports events, date selection, and custom rendering
 *
 * @example
 * <CalendarView
 *   events={events}
 *   onDateSelect={handleDateSelect}
 *   view="month"
 * />
 */

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  allDay?: boolean;
  description?: string;
}

export interface CalendarViewProps extends CommonProps {
  /** Array of events */
  events?: CalendarEvent[];
  /** Initial view mode */
  view?: 'month' | 'week' | 'day' | 'agenda';
  /** Date selection handler */
  onDateSelect?: (date: Date) => void;
  /** Event click handler */
  onEventClick?: (event: CalendarEvent) => void;
  /** Enable date range selection */
  selectable?: boolean;
  /** Minimum date */
  minDate?: Date;
  /** Maximum date */
  maxDate?: Date;
  /** Custom event renderer */
  eventRenderer?: (event: CalendarEvent) => ReactNode;
}

/**
 * Usage Example:
 *
 * const events: CalendarEvent[] = [
 *   {
 *     id: '1',
 *     title: 'Team Meeting',
 *     start: new Date(2024, 0, 15, 10, 0),
 *     end: new Date(2024, 0, 15, 11, 0),
 *     color: '#00c307'
 *   }
 * ];
 *
 * <CalendarView
 *   events={events}
 *   view="month"
 *   selectable
 *   onDateSelect={(date) => console.log('Selected:', date)}
 *   onEventClick={(event) => openEventModal(event)}
 * />
 */

/**
 * ===================
 * 7. CHART
 * ===================
 *
 * Wrapper for ApexCharts with common configurations
 * Supports line, bar, pie, donut, area, and more
 *
 * @example
 * <Chart
 *   type="line"
 *   data={chartData}
 *   height={350}
 * />
 */

export interface ChartProps extends CommonProps {
  /** Chart type */
  type: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap';
  /** Chart data series */
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  /** Chart options */
  options?: ApexOptions;
  /** Chart width */
  width?: string | number;
  /** Chart height */
  height?: string | number;
}

/**
 * Usage Example:
 *
 * const chartData = {
 *   series: [{
 *     name: 'Revenue',
 *     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
 *   }],
 *   options: {
 *     chart: {
 *       type: 'line'
 *     },
 *     xaxis: {
 *       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
 *     },
 *     colors: ['#00c307']
 *   }
 * };
 *
 * <Chart
 *   type="line"
 *   series={chartData.series}
 *   options={chartData.options}
 *   height={350}
 * />
 */

/**
 * ===================
 * 8. CONFIRMDIALOG
 * ===================
 *
 * Modal dialog for user confirmations
 *
 * @example
 * <ConfirmDialog
 *   isOpen={isOpen}
 *   onConfirm={handleDelete}
 *   onCancel={handleCancel}
 *   title="Delete Item"
 *   message="Are you sure you want to delete this item?"
 * />
 */

export interface ConfirmDialogProps {
  /** Dialog visibility */
  isOpen: boolean;
  /** Dialog title */
  title: string;
  /** Confirmation message */
  message: string | ReactNode;
  /** Confirm button text */
  confirmText?: string;
  /** Cancel button text */
  cancelText?: string;
  /** Confirm button color */
  confirmColor?: ColorType;
  /** Confirm callback */
  onConfirm: () => void | Promise<void>;
  /** Cancel callback */
  onCancel: () => void;
  /** Loading state */
  loading?: boolean;
  /** Type of dialog */
  type?: 'info' | 'warning' | 'error' | 'success';
}

/**
 * Usage Example:
 *
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <ConfirmDialog
 *   isOpen={isOpen}
 *   title="Confirm Deletion"
 *   message="This action cannot be undone. Are you sure?"
 *   confirmText="Delete"
 *   cancelText="Cancel"
 *   confirmColor="error"
 *   type="warning"
 *   onConfirm={async () => {
 *     await deleteItem(itemId);
 *     setIsOpen(false);
 *   }}
 *   onCancel={() => setIsOpen(false)}
 * />
 */

/**
 * ===================
 * 9. CONTAINER
 * ===================
 *
 * Responsive container component
 * Centers content and applies max-width
 *
 * @example
 * <Container>
 *   <h1>Page Content</h1>
 * </Container>
 */

export interface ContainerProps extends CommonProps {
  /** Max width variant */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  /** Remove padding */
  noPadding?: boolean;
}

/**
 * Usage Example:
 *
 * <Container maxWidth="lg">
 *   <Header />
 *   <MainContent />
 *   <Footer />
 * </Container>
 */

/**
 * ===================
 * 10. CUSTOMFORMATINPUT
 * ===================
 *
 * Input with custom formatting (phone, credit card, etc.)
 *
 * @example
 * <CustomFormatInput
 *   format="#### #### #### ####"
 *   placeholder="Credit Card"
 * />
 */

export interface CustomFormatInputProps extends CommonProps {
  /** Format pattern (# for digits) */
  format: string;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Mask character */
  mask?: string;
  /** Allow only numeric input */
  numeric?: boolean;
}

/**
 * Usage Example:
 *
 * // Phone number
 * <CustomFormatInput
 *   format="(###) ###-####"
 *   placeholder="Phone Number"
 *   numeric
 *   value={phone}
 *   onChange={setPhone}
 * />
 *
 * // Credit Card
 * <CustomFormatInput
 *   format="#### #### #### ####"
 *   placeholder="Card Number"
 *   numeric
 * />
 *
 * // Date
 * <CustomFormatInput
 *   format="##/##/####"
 *   placeholder="MM/DD/YYYY"
 *   numeric
 * />
 */

/**
 * ===================
 * 11. DATATABLE
 * ===================
 *
 * Advanced data table with sorting, filtering, pagination
 * Built on TanStack Table
 *
 * @example
 * <DataTable
 *   columns={columns}
 *   data={data}
 *   pagination
 *   sortable
 * />
 */

export interface DataTableColumn<T = any> {
  /** Column ID */
  id: string;
  /** Column header */
  header: string | ReactNode;
  /** Accessor for data */
  accessorKey?: keyof T;
  /** Custom cell renderer */
  cell?: (info: any) => ReactNode;
  /** Enable sorting */
  enableSorting?: boolean;
  /** Enable filtering */
  enableColumnFilter?: boolean;
  /** Column width */
  size?: number;
  /** Min width */
  minSize?: number;
  /** Max width */
  maxSize?: number;
}

export interface DataTableProps<T = any> extends CommonProps {
  /** Table columns */
  columns: DataTableColumn<T>[];
  /** Table data */
  data: T[];
  /** Enable pagination */
  pagination?: boolean;
  /** Page size */
  pageSize?: number;
  /** Enable sorting */
  sortable?: boolean;
  /** Enable row selection */
  selectable?: boolean;
  /** Row selection handler */
  onRowSelect?: (selectedRows: T[]) => void;
  /** Enable filtering */
  filterable?: boolean;
  /** Enable column resize */
  resizable?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyText?: string;
}

/**
 * Usage Example:
 *
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 *   role: string;
 *   status: 'active' | 'inactive';
 * }
 *
 * const columns: DataTableColumn<User>[] = [
 *   {
 *     id: 'name',
 *     header: 'Name',
 *     accessorKey: 'name',
 *     enableSorting: true
 *   },
 *   {
 *     id: 'email',
 *     header: 'Email',
 *     accessorKey: 'email',
 *   },
 *   {
 *     id: 'status',
 *     header: 'Status',
 *     cell: (info) => (
 *       <Badge color={info.getValue() === 'active' ? 'success' : 'error'}>
 *         {info.getValue()}
 *       </Badge>
 *     )
 *   },
 *   {
 *     id: 'actions',
 *     header: 'Actions',
 *     cell: (info) => (
 *       <div className="flex gap-2">
 *         <Button size="sm" onClick={() => editUser(info.row.original)}>
 *           Edit
 *         </Button>
 *         <Button size="sm" variant="outline" onClick={() => deleteUser(info.row.original.id)}>
 *           Delete
 *         </Button>
 *       </div>
 *     )
 *   }
 * ];
 *
 * <DataTable
 *   columns={columns}
 *   data={users}
 *   pagination
 *   pageSize={10}
 *   sortable
 *   selectable
 *   filterable
 *   resizable
 *   onRowSelect={(rows) => console.log('Selected:', rows)}
 * />
 */

/**
 * ===================
 * 12. DEBOUNCEINPUT
 * ===================
 *
 * Input with debounced onChange
 * Reduces API calls for search/filter inputs
 *
 * @example
 * <DebounceInput
 *   value={search}
 *   onChange={handleSearch}
 *   delay={500}
 * />
 */

export interface DebounceInputProps extends CommonProps {
  /** Input value */
  value?: string;
  /** Debounced change handler */
  onChange: (value: string) => void;
  /** Debounce delay in ms */
  delay?: number;
  /** Placeholder text */
  placeholder?: string;
  /** Input size */
  size?: Size;
}

/**
 * Usage Example:
 *
 * const [search, setSearch] = useState('');
 *
 * <DebounceInput
 *   value={search}
 *   onChange={(value) => {
 *     setSearch(value);
 *     // This will only fire after 500ms of no typing
 *     searchUsers(value);
 *   }}
 *   delay={500}
 *   placeholder="Search users..."
 * />
 */

/**
 * ===================
 * 13. DOUBLESIDEDIMAGE
 * ===================
 *
 * Image component with flip animation
 * Shows different images on front and back
 *
 * @example
 * <DoubleSidedImage
 *   frontSrc="/front.jpg"
 *   backSrc="/back.jpg"
 * />
 */

export interface DoubleSidedImageProps extends CommonProps {
  /** Front image URL */
  frontSrc: string;
  /** Back image URL */
  backSrc: string;
  /** Alt text for front */
  frontAlt?: string;
  /** Alt text for back */
  backAlt?: string;
  /** Flip trigger */
  trigger?: 'hover' | 'click';
  /** Image width */
  width?: number | string;
  /** Image height */
  height?: number | string;
}

/**
 * Usage Example:
 *
 * <DoubleSidedImage
 *   frontSrc="/product-front.jpg"
 *   backSrc="/product-back.jpg"
 *   trigger="hover"
 *   width={300}
 *   height={400}
 * />
 */

/**
 * ===================
 * 14. ELLIPSISBUTTON
 * ===================
 *
 * Three-dot menu button (⋯)
 * Commonly used for dropdown actions
 *
 * @example
 * <EllipsisButton onClick={handleClick} />
 */

export interface EllipsisButtonProps extends CommonProps {
  /** Click handler */
  onClick?: () => void;
  /** Button size */
  size?: Size;
  /** Vertical orientation */
  vertical?: boolean;
}

/**
 * Usage Example:
 *
 * <EllipsisButton
 *   onClick={() => setMenuOpen(!menuOpen)}
 *   size="md"
 * />
 */

/**
 * ===================
 * 15. GANTTCHART
 * ===================
 *
 * Project timeline visualization
 *
 * @example
 * <GanttChart
 *   tasks={projectTasks}
 *   startDate={startDate}
 *   endDate={endDate}
 * />
 */

export interface GanttTask {
  id: string;
  name: string;
  start: Date;
  end: Date;
  progress: number;
  dependencies?: string[];
  color?: string;
}

export interface GanttChartProps extends CommonProps {
  /** Array of tasks */
  tasks: GanttTask[];
  /** Chart start date */
  startDate?: Date;
  /** Chart end date */
  endDate?: Date;
  /** View mode */
  viewMode?: 'day' | 'week' | 'month';
  /** Task click handler */
  onTaskClick?: (task: GanttTask) => void;
  /** Enable drag and drop */
  draggable?: boolean;
}

/**
 * Usage Example:
 *
 * const tasks: GanttTask[] = [
 *   {
 *     id: '1',
 *     name: 'Design Phase',
 *     start: new Date(2024, 0, 1),
 *     end: new Date(2024, 0, 15),
 *     progress: 100,
 *     color: '#00c307'
 *   },
 *   {
 *     id: '2',
 *     name: 'Development',
 *     start: new Date(2024, 0, 16),
 *     end: new Date(2024, 1, 28),
 *     progress: 60,
 *     dependencies: ['1']
 *   }
 * ];
 *
 * <GanttChart
 *   tasks={tasks}
 *   viewMode="week"
 *   draggable
 *   onTaskClick={(task) => openTaskDetail(task)}
 * />
 */

/**
 * ===================
 * 16. GROWSHRINKVALUE
 * ===================
 *
 * Displays value with growth/shrink indicator
 * Shows percentage change with up/down arrow
 *
 * @example
 * <GrowShrinkValue
 *   value={1250}
 *   previousValue={1000}
 * />
 */

export interface GrowShrinkValueProps extends CommonProps {
  /** Current value */
  value: number;
  /** Previous value for comparison */
  previousValue: number;
  /** Value prefix (e.g., "$") */
  prefix?: string;
  /** Value suffix (e.g., "%") */
  suffix?: string;
  /** Show percentage change */
  showPercentage?: boolean;
  /** Number format */
  decimals?: number;
}

/**
 * Usage Example:
 *
 * <GrowShrinkValue
 *   value={45250}
 *   previousValue={38900}
 *   prefix="$"
 *   showPercentage
 *   decimals={0}
 * />
 * // Displays: $45,250 ↑ 16.3%
 */

/**
 * ===================
 * 17. ICONTEXT
 * ===================
 *
 * Text with icon
 * Properly aligns icon and text
 *
 * @example
 * <IconText icon={<UserIcon />}>
 *   John Doe
 * </IconText>
 */

export interface IconTextProps extends CommonProps {
  /** Icon element */
  icon: ReactNode;
  /** Text content */
  children: ReactNode;
  /** Icon placement */
  iconPosition?: 'left' | 'right';
  /** Gap between icon and text */
  gap?: number;
}

/**
 * Usage Example:
 *
 * import { HiUser, HiMail, HiPhone } from 'react-icons/hi';
 *
 * <IconText icon={<HiUser />}>
 *   John Doe
 * </IconText>
 *
 * <IconText icon={<HiMail />} iconPosition="left">
 *   john@example.com
 * </IconText>
 */

/**
 * ===================
 * 18. IMAGEGALLERY
 * ===================
 *
 * Image gallery with lightbox
 *
 * @example
 * <ImageGallery images={images} />
 */

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export interface ImageGalleryProps extends CommonProps {
  /** Array of images */
  images: GalleryImage[];
  /** Grid columns */
  columns?: 2 | 3 | 4 | 5;
  /** Gap between images */
  gap?: number;
  /** Enable lightbox */
  lightbox?: boolean;
  /** Aspect ratio */
  aspectRatio?: '1:1' | '4:3' | '16:9' | '21:9';
}

/**
 * Usage Example:
 *
 * const images: GalleryImage[] = [
 *   {
 *     src: '/gallery/image1.jpg',
 *     alt: 'Image 1',
 *     caption: 'Beautiful sunset'
 *   },
 *   {
 *     src: '/gallery/image2.jpg',
 *     alt: 'Image 2',
 *     caption: 'Mountain view'
 *   }
 * ];
 *
 * <ImageGallery
 *   images={images}
 *   columns={3}
 *   gap={16}
 *   lightbox
 *   aspectRatio="16:9"
 * />
 */

/**
 * ===================
 * 19. LOADING
 * ===================
 *
 * Loading indicator component
 * Multiple styles: spinner, dots, bars
 *
 * @example
 * <Loading type="spinner" />
 */

export interface LoadingProps extends CommonProps {
  /** Loading type */
  type?: 'spinner' | 'dots' | 'bars' | 'pulse';
  /** Size */
  size?: Size;
  /** Color */
  color?: string;
  /** Loading text */
  text?: string;
  /** Full page overlay */
  fullscreen?: boolean;
}

/**
 * Usage Example:
 *
 * <Loading type="spinner" size="lg" />
 *
 * <Loading
 *   type="dots"
 *   text="Loading data..."
 *   fullscreen
 * />
 */

/**
 * ===================
 * 20. MASONRY
 * ===================
 *
 * Pinterest-style masonry layout
 *
 * @example
 * <Masonry columns={3} gap={16}>
 *   {items.map(item => <Card key={item.id}>{item.content}</Card>)}
 * </Masonry>
 */

export interface MasonryProps extends CommonProps {
  /** Number of columns */
  columns?: number;
  /** Responsive column config */
  breakpoints?: {
    [key: number]: number; // breakpoint: columns
  };
  /** Gap between items */
  gap?: number;
}

/**
 * Usage Example:
 *
 * <Masonry
 *   columns={3}
 *   gap={20}
 *   breakpoints={{
 *     640: 1,
 *     768: 2,
 *     1024: 3,
 *     1280: 4
 *   }}
 * >
 *   {posts.map(post => (
 *     <Card key={post.id}>
 *       <img src={post.image} alt={post.title} />
 *       <h3>{post.title}</h3>
 *       <p>{post.description}</p>
 *     </Card>
 *   ))}
 * </Masonry>
 */

/**
 * ===================
 * 21. MEDIASKELETON
 * ===================
 *
 * Skeleton loader for media content
 *
 * @example
 * <MediaSkeleton type="card" />
 */

export interface MediaSkeletonProps extends CommonProps {
  /** Skeleton type */
  type?: 'card' | 'list' | 'avatar' | 'text';
  /** Number of rows (for list/text) */
  rows?: number;
  /** Enable animation */
  animate?: boolean;
}

/**
 * Usage Example:
 *
 * {loading ? (
 *   <MediaSkeleton type="card" rows={3} animate />
 * ) : (
 *   <UserCard user={user} />
 * )}
 */

/**
 * ===================
 * 22. NAVTOGGLE
 * ===================
 *
 * Navigation toggle button (hamburger menu)
 *
 * @example
 * <NavToggle
 *   isOpen={isOpen}
 *   onClick={() => setIsOpen(!isOpen)}
 * />
 */

export interface NavToggleProps extends CommonProps {
  /** Open state */
  isOpen: boolean;
  /** Click handler */
  onClick: () => void;
  /** Toggle size */
  size?: Size;
}

/**
 * Usage Example:
 *
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <NavToggle
 *   isOpen={isOpen}
 *   onClick={() => setIsOpen(!isOpen)}
 *   size="md"
 * />
 */

/**
 * ===================
 * 23. NUMERICINPUT
 * ===================
 *
 * Input for numeric values with increment/decrement buttons
 *
 * @example
 * <NumericInput
 *   value={quantity}
 *   onChange={setQuantity}
 *   min={1}
 *   max={99}
 * />
 */

export interface NumericInputProps extends CommonProps {
  /** Current value */
  value: number;
  /** Change handler */
  onChange: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step amount */
  step?: number;
  /** Decimal places */
  decimals?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Size */
  size?: Size;
}

/**
 * Usage Example:
 *
 * const [quantity, setQuantity] = useState(1);
 *
 * <NumericInput
 *   value={quantity}
 *   onChange={setQuantity}
 *   min={1}
 *   max={100}
 *   step={1}
 *   size="md"
 * />
 *
 * // For prices with decimals
 * <NumericInput
 *   value={price}
 *   onChange={setPrice}
 *   min={0}
 *   step={0.01}
 *   decimals={2}
 * />
 */

/**
 * ===================
 * 24. OTPINPUT
 * ===================
 *
 * One-time password input component
 *
 * @example
 * <OtpInput
 *   length={6}
 *   onComplete={handleOtpComplete}
 * />
 */

export interface OtpInputProps extends CommonProps {
  /** Number of input fields */
  length?: number;
  /** Completion handler */
  onComplete: (otp: string) => void;
  /** Change handler */
  onChange?: (otp: string) => void;
  /** Input type */
  type?: 'text' | 'number';
  /** Mask input */
  masked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Auto-focus first input */
  autoFocus?: boolean;
}

/**
 * Usage Example:
 *
 * <OtpInput
 *   length={6}
 *   type="number"
 *   autoFocus
 *   onComplete={(otp) => {
 *     verifyOtp(otp);
 *   }}
 *   onChange={(otp) => {
 *     console.log('Current OTP:', otp);
 *   }}
 * />
 */

/**
 * ===================
 * 25. PASSWORDINPUT
 * ===================
 *
 * Password input with visibility toggle
 *
 * @example
 * <PasswordInput
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 * />
 */

export interface PasswordInputProps extends CommonProps {
  /** Input value */
  value: string;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Placeholder */
  placeholder?: string;
  /** Show strength meter */
  showStrength?: boolean;
  /** Size */
  size?: Size;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Usage Example:
 *
 * const [password, setPassword] = useState('');
 *
 * <PasswordInput
 *   value={password}
 *   onChange={(e) => setPassword(e.target.value)}
 *   placeholder="Enter password"
 *   showStrength
 *   size="md"
 * />
 */

/**
 * ===================
 * 26. PATTERNINPUT
 * ===================
 *
 * Input with regex pattern validation
 *
 * @example
 * <PatternInput
 *   pattern="[A-Za-z]{3}"
 *   placeholder="Enter 3 letters"
 * />
 */

export interface PatternInputProps extends CommonProps {
  /** Validation pattern */
  pattern: string | RegExp;
  /** Input value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Placeholder */
  placeholder?: string;
  /** Error message */
  errorMessage?: string;
  /** Size */
  size?: Size;
}

/**
 * Usage Example:
 *
 * // Only letters
 * <PatternInput
 *   pattern="[A-Za-z]+"
 *   placeholder="Letters only"
 *   errorMessage="Please enter only letters"
 * />
 *
 * // Email format
 * <PatternInput
 *   pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
 *   placeholder="Email address"
 *   errorMessage="Invalid email format"
 * />
 */

/**
 * ===================
 * 27. REGIONMAP
 * ===================
 *
 * Interactive geographical map
 * Supports choropleth and markers
 *
 * @example
 * <RegionMap
 *   data={regionData}
 *   colorScale="green"
 * />
 */

export interface RegionData {
  id: string;
  name: string;
  value: number;
  color?: string;
}

export interface RegionMapProps extends CommonProps {
  /** Region data */
  data: RegionData[];
  /** Map projection */
  projection?: 'mercator' | 'natural-earth' | 'albers-usa';
  /** Color scale */
  colorScale?: string | string[];
  /** Tooltip content */
  tooltip?: (data: RegionData) => ReactNode;
  /** Region click handler */
  onRegionClick?: (data: RegionData) => void;
  /** Enable zoom */
  zoomable?: boolean;
}

/**
 * Usage Example:
 *
 * const regionData: RegionData[] = [
 *   { id: 'CA', name: 'California', value: 1250 },
 *   { id: 'NY', name: 'New York', value: 980 },
 *   { id: 'TX', name: 'Texas', value: 750 }
 * ];
 *
 * <RegionMap
 *   data={regionData}
 *   projection="albers-usa"
 *   colorScale={['#e6ffe6', '#00c307']}
 *   zoomable
 *   tooltip={(d) => (
 *     <div>
 *       <strong>{d.name}</strong>
 *       <br />
 *       Value: {d.value}
 *     </div>
 *   )}
 *   onRegionClick={(d) => console.log('Clicked:', d.name)}
 * />
 */

/**
 * ===================
 * 28. RICHTEXTEDITOR
 * ===================
 *
 * WYSIWYG text editor
 * Built on Tiptap
 *
 * @example
 * <RichTextEditor
 *   value={content}
 *   onChange={setContent}
 * />
 */

export interface RichTextEditorProps extends CommonProps {
  /** Editor content */
  value: string;
  /** Change handler */
  onChange: (html: string) => void;
  /** Placeholder */
  placeholder?: string;
  /** Toolbar options */
  toolbar?: ('bold' | 'italic' | 'underline' | 'strike' | 'heading' | 'bullet' | 'number' | 'quote' | 'code' | 'link' | 'image')[];
  /** Minimum height */
  minHeight?: number;
  /** Maximum height */
  maxHeight?: number;
  /** Read-only mode */
  readOnly?: boolean;
}

/**
 * Usage Example:
 *
 * const [content, setContent] = useState('');
 *
 * <RichTextEditor
 *   value={content}
 *   onChange={setContent}
 *   placeholder="Start writing..."
 *   toolbar={[
 *     'bold',
 *     'italic',
 *     'underline',
 *     'heading',
 *     'bullet',
 *     'number',
 *     'link',
 *     'image'
 *   ]}
 *   minHeight={200}
 *   maxHeight={500}
 * />
 */

/**
 * ===================
 * 29. SEGMENTITEMOPTION
 * ===================
 *
 * Segmented control option item
 * Used with Segment component
 *
 * @example
 * <Segment>
 *   <SegmentItemOption value="day">Day</SegmentItemOption>
 *   <SegmentItemOption value="week">Week</SegmentItemOption>
 * </Segment>
 */

export interface SegmentItemOptionProps {
  /** Option value */
  value: string;
  /** Option label */
  children: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Custom icon */
  icon?: ReactNode;
}

/**
 * Usage Example:
 *
 * import { HiCalendar, HiClock } from 'react-icons/hi';
 *
 * <Segment value={view} onChange={setView}>
 *   <SegmentItemOption value="day" icon={<HiCalendar />}>
 *     Day
 *   </SegmentItemOption>
 *   <SegmentItemOption value="week" icon={<HiClock />}>
 *     Week
 *   </SegmentItemOption>
 *   <SegmentItemOption value="month">
 *     Month
 *   </SegmentItemOption>
 * </Segment>
 */

/**
 * ===================
 * 30. STICKYFOOTER
 * ===================
 *
 * Footer that sticks to bottom of viewport
 *
 * @example
 * <StickyFooter>
 *   <p>© 2024 Company Name</p>
 * </StickyFooter>
 */

export interface StickyFooterProps extends CommonProps {
  /** Footer content */
  children: ReactNode;
  /** Footer height */
  height?: number;
  /** Z-index */
  zIndex?: number;
}

/**
 * Usage Example:
 *
 * <StickyFooter height={60}>
 *   <div className="flex justify-between items-center">
 *     <p>© 2024 Ecme</p>
 *     <div className="flex gap-4">
 *       <a href="/privacy">Privacy</a>
 *       <a href="/terms">Terms</a>
 *     </div>
 *   </div>
 * </StickyFooter>
 */

/**
 * ===================
 * 31. SYNTAXHIGHLIGHTER
 * ===================
 *
 * Code syntax highlighting component
 *
 * @example
 * <SyntaxHighlighter language="typescript">
 *   {codeString}
 * </SyntaxHighlighter>
 */

export interface SyntaxHighlighterProps extends CommonProps {
  /** Code to highlight */
  children: string;
  /** Programming language */
  language: string;
  /** Theme */
  theme?: 'light' | 'dark';
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Highlight lines */
  highlightLines?: number[];
  /** Enable copy button */
  copyable?: boolean;
}

/**
 * Usage Example:
 *
 * const code = `
 * const greeting = (name: string) => {
 *   return \`Hello, \${name}!\`;
 * };
 * `;
 *
 * <SyntaxHighlighter
 *   language="typescript"
 *   theme="dark"
 *   showLineNumbers
 *   copyable
 *   highlightLines={[2]}
 * >
 *   {code}
 * </SyntaxHighlighter>
 */

/**
 * ===================
 * 32. USERSAVATARGROUP
 * ===================
 *
 * Display multiple user avatars
 * Shows count when exceeding max
 *
 * @example
 * <UsersAvatarGroup users={users} max={3} />
 */

export interface UserAvatar {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
}

export interface UsersAvatarGroupProps extends CommonProps {
  /** Array of users */
  users: UserAvatar[];
  /** Maximum avatars to show */
  max?: number;
  /** Avatar size */
  size?: Size;
  /** Show tooltip on hover */
  tooltip?: boolean;
  /** Click handler */
  onClick?: (user: UserAvatar) => void;
}

/**
 * Usage Example:
 *
 * const users: UserAvatar[] = [
 *   { id: '1', name: 'John Doe', avatar: '/avatars/john.jpg' },
 *   { id: '2', name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
 *   { id: '3', name: 'Bob Johnson', avatar: '/avatars/bob.jpg' },
 *   { id: '4', name: 'Alice Williams' }
 * ];
 *
 * <UsersAvatarGroup
 *   users={users}
 *   max={3}
 *   size="md"
 *   tooltip
 *   onClick={(user) => viewProfile(user.id)}
 * />
 * // Shows 3 avatars + "+1" indicator
 */

// =====================================================
// UTILITY HOOKS
// =====================================================

/**
 * ===================
 * 33. useAppendQueryParams
 * ===================
 *
 * Hook for appending query parameters to URL
 *
 * @example
 * const appendParams = useAppendQueryParams();
 * appendParams({ filter: 'active', sort: 'name' });
 */

export const useAppendQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const appendQueryParams = (params: Record<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    Object.entries(params).forEach(([key, value]) => {
      current.set(key, value);
    });
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  return appendQueryParams;
};

/**
 * Usage Example:
 *
 * const FilterComponent = () => {
 *   const appendParams = useAppendQueryParams();
 *
 *   const handleFilter = (filter: string) => {
 *     appendParams({ filter, page: '1' });
 *   };
 *
 *   return (
 *     <Select onChange={(e) => handleFilter(e.target.value)}>
 *       <option value="all">All</option>
 *       <option value="active">Active</option>
 *       <option value="inactive">Inactive</option>
 *     </Select>
 *   );
 * };
 */

/**
 * ===================
 * 34. useAuthority
 * ===================
 *
 * Check user authority/permissions
 *
 * @example
 * const { hasAuthority } = useAuthority();
 * if (hasAuthority(['admin'])) {
 *   // Show admin content
 * }
 */

export const useAuthority = () => {
  const session = useCurrentSession();

  const hasAuthority = (requiredAuthority: string[]): boolean => {
    if (!session?.user?.role) return false;
    if (requiredAuthority.length === 0) return true;
    return requiredAuthority.includes(session.user.role);
  };

  return { hasAuthority, userRole: session?.user?.role };
};

/**
 * Usage Example:
 *
 * const AdminPanel = () => {
 *   const { hasAuthority, userRole } = useAuthority();
 *
 *   if (!hasAuthority(['admin', 'moderator'])) {
 *     return <AccessDenied />;
 *   }
 *
 *   return (
 *     <div>
 *       <h1>Admin Panel</h1>
 *       <p>Current role: {userRole}</p>
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 35. useCurrentSession
 * ===================
 *
 * Get current user session
 *
 * @example
 * const session = useCurrentSession();
 * console.log(session?.user?.name);
 */

export const useCurrentSession = () => {
  const { data: session } = useSession();
  return session;
};

/**
 * Usage Example:
 *
 * const ProfileHeader = () => {
 *   const session = useCurrentSession();
 *
 *   if (!session) {
 *     return <div>Not logged in</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <h1>Welcome, {session.user.name}!</h1>
 *       <p>{session.user.email}</p>
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 36. useDebounce
 * ===================
 *
 * Debounce a value
 *
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 500);
 */

export const useDebounce = <T,>(value: T, delay: number = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Usage Example:
 *
 * const SearchComponent = () => {
 *   const [search, setSearch] = useState('');
 *   const debouncedSearch = useDebounce(search, 500);
 *
 *   useEffect(() => {
 *     if (debouncedSearch) {
 *       // This only runs 500ms after user stops typing
 *       searchAPI(debouncedSearch);
 *     }
 *   }, [debouncedSearch]);
 *
 *   return (
 *     <Input
 *       value={search}
 *       onChange={(e) => setSearch(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * };
 */

/**
 * ===================
 * 37. useInfiniteScroll
 * ===================
 *
 * Infinite scrolling hook
 *
 * @example
 * const { ref, isLoading } = useInfiniteScroll(loadMore);
 */

export interface UseInfiniteScrollOptions {
  /** Callback when reaching bottom */
  onLoadMore: () => void | Promise<void>;
  /** Loading state */
  isLoading?: boolean;
  /** Has more data to load */
  hasMore?: boolean;
  /** Threshold in pixels */
  threshold?: number;
}

export const useInfiniteScroll = (options: UseInfiniteScrollOptions) => {
  const { onLoadMore, isLoading = false, hasMore = true, threshold = 100 } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || isLoading || !hasMore) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        onLoadMore();
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore, threshold, onLoadMore]);

  return { ref, isLoading };
};

/**
 * Usage Example:
 *
 * const InfiniteList = () => {
 *   const [items, setItems] = useState([]);
 *   const [page, setPage] = useState(1);
 *   const [loading, setLoading] = useState(false);
 *   const [hasMore, setHasMore] = useState(true);
 *
 *   const loadMore = async () => {
 *     setLoading(true);
 *     const newItems = await fetchItems(page);
 *     if (newItems.length === 0) {
 *       setHasMore(false);
 *     } else {
 *       setItems([...items, ...newItems]);
 *       setPage(page + 1);
 *     }
 *     setLoading(false);
 *   };
 *
 *   const { ref } = useInfiniteScroll({
 *     onLoadMore: loadMore,
 *     isLoading: loading,
 *     hasMore,
 *     threshold: 200
 *   });
 *
 *   return (
 *     <div ref={ref} className="overflow-auto h-screen">
 *       {items.map(item => (
 *         <ItemCard key={item.id} item={item} />
 *       ))}
 *       {loading && <Loading />}
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 38. useInterval
 * ===================
 *
 * Declarative interval hook
 *
 * @example
 * useInterval(() => {
 *   fetchData();
 * }, 5000);
 */

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

/**
 * Usage Example:
 *
 * const LiveData = () => {
 *   const [data, setData] = useState(null);
 *   const [isRunning, setIsRunning] = useState(true);
 *
 *   useInterval(
 *     async () => {
 *       const newData = await fetchLiveData();
 *       setData(newData);
 *     },
 *     isRunning ? 5000 : null // Pass null to pause
 *   );
 *
 *   return (
 *     <div>
 *       <div>{data}</div>
 *       <button onClick={() => setIsRunning(!isRunning)}>
 *         {isRunning ? 'Pause' : 'Resume'}
 *       </button>
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 39. useLayout
 * ===================
 *
 * Get and set layout configuration
 *
 * @example
 * const { layout, setLayout } = useLayout();
 */

export const useLayout = () => {
  const layout = useTheme((state) => state.layout);
  const setLayoutType = useTheme((state) => state.setLayoutType);
  const setSideNavCollapse = useTheme((state) => state.setSideNavCollapse);

  return {
    layout,
    setLayoutType,
    setSideNavCollapse
  };
};

/**
 * Usage Example:
 *
 * const LayoutSwitcher = () => {
 *   const { layout, setLayoutType, setSideNavCollapse } = useLayout();
 *
 *   return (
 *     <div>
 *       <Select
 *         value={layout.type}
 *         onChange={(e) => setLayoutType(e.target.value)}
 *       >
 *         <option value="collapsibleSide">Collapsible Side</option>
 *         <option value="stackedSide">Stacked Side</option>
 *         <option value="topBarClassic">Top Bar</option>
 *       </Select>
 *
 *       <Switcher
 *         checked={layout.sideNavCollapse}
 *         onChange={setSideNavCollapse}
 *       />
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 40. useMenuActive
 * ===================
 *
 * Get active menu item based on current route
 *
 * @example
 * const activeKey = useMenuActive();
 */

export const useMenuActive = () => {
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<string>('');

  useEffect(() => {
    // Logic to determine active menu key from pathname
    setActiveKey(pathname);
  }, [pathname]);

  return activeKey;
};

/**
 * Usage Example:
 *
 * const NavigationMenu = () => {
 *   const activeKey = useMenuActive();
 *
 *   return (
 *     <Menu>
 *       {menuItems.map(item => (
 *         <MenuItem
 *           key={item.key}
 *           active={activeKey === item.key}
 *         >
 *           {item.label}
 *         </MenuItem>
 *       ))}
 *     </Menu>
 *   );
 * };
 */

/**
 * ===================
 * 41. useNavigation
 * ===================
 *
 * Navigation utilities
 *
 * @example
 * const { navigate } = useNavigation();
 * navigate('/dashboard');
 */

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  const goBack = () => {
    router.back();
  };

  const replace = (path: string) => {
    router.replace(path);
  };

  return { navigate, goBack, replace };
};

/**
 * Usage Example:
 *
 * const NavigationButtons = () => {
 *   const { navigate, goBack } = useNavigation();
 *
 *   return (
 *     <div>
 *       <Button onClick={goBack}>Back</Button>
 *       <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 42. useRandomBgColor
 * ===================
 *
 * Generate random background color
 * Useful for avatars, placeholders
 *
 * @example
 * const bgColor = useRandomBgColor('user-id');
 */

export const useRandomBgColor = (seed?: string): string => {
  const colors = [
    '#00c307', '#2a85ff', '#7c3aed', '#f59e0b',
    '#10b981', '#ef4444', '#8b5cf6', '#ec4899'
  ];

  const getColor = (str?: string): string => {
    if (!str) return colors[Math.floor(Math.random() * colors.length)];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return getColor(seed);
};

/**
 * Usage Example:
 *
 * const UserAvatar = ({ user }) => {
 *   const bgColor = useRandomBgColor(user.id);
 *
 *   return (
 *     <div
 *       className="w-10 h-10 rounded-full flex items-center justify-center"
 *       style={{ backgroundColor: bgColor }}
 *     >
 *       {user.name.charAt(0)}
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 43. useResponsive
 * ===================
 *
 * Detect responsive breakpoints
 *
 * @example
 * const { isMobile, isTablet, isDesktop } = useResponsive();
 */

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowSize.width < 768,
    isTablet: windowSize.width >= 768 && windowSize.width < 1024,
    isDesktop: windowSize.width >= 1024,
    width: windowSize.width,
    height: windowSize.height
  };
};

/**
 * Usage Example:
 *
 * const ResponsiveLayout = () => {
 *   const { isMobile, isTablet, isDesktop } = useResponsive();
 *
 *   return (
 *     <div>
 *       {isMobile && <MobileLayout />}
 *       {isTablet && <TabletLayout />}
 *       {isDesktop && <DesktopLayout />}
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 44. useScrollTop
 * ===================
 *
 * Detect scroll position
 *
 * @example
 * const isScrolled = useScrollTop(100);
 */

export const useScrollTop = (threshold: number = 0): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Usage Example:
 *
 * const Header = () => {
 *   const isScrolled = useScrollTop(50);
 *
 *   return (
 *     <header
 *       className={`fixed top-0 transition-all ${
 *         isScrolled ? 'shadow-lg bg-white' : 'bg-transparent'
 *       }`}
 *     >
 *       <nav>...</nav>
 *     </header>
 *   );
 * };
 */

/**
 * ===================
 * 45. useTheme
 * ===================
 *
 * Theme management hook
 *
 * @example
 * const { mode, setMode } = useTheme();
 */

export const useTheme = () => {
  // Implementation would use Zustand store
  return {
    mode: 'light' as ThemeMode,
    setMode: (mode: ThemeMode) => {},
    direction: 'ltr' as Direction,
    setDirection: (dir: Direction) => {},
    themeSchema: 'default',
    setSchema: (schema: string) => {}
  };
};

/**
 * Usage Example:
 *
 * const ThemeControls = () => {
 *   const { mode, setMode, direction, setDirection } = useTheme();
 *
 *   return (
 *     <div>
 *       <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
 *         Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
 *       </button>
 *
 *       <button onClick={() => setDirection(direction === 'ltr' ? 'rtl' : 'ltr')}>
 *         Switch to {direction === 'ltr' ? 'RTL' : 'LTR'}
 *       </button>
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 46. useTimeOutMessage
 * ===================
 *
 * Show message with auto-dismiss
 *
 * @example
 * const showMessage = useTimeOutMessage();
 * showMessage('Success!', 3000);
 */

export const useTimeOutMessage = () => {
  const [message, setMessage] = useState<string>('');
  const [visible, setVisible] = useState(false);

  const showMessage = (text: string, duration: number = 3000) => {
    setMessage(text);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  return { message, visible, showMessage };
};

/**
 * Usage Example:
 *
 * const FormComponent = () => {
 *   const { message, visible, showMessage } = useTimeOutMessage();
 *
 *   const handleSubmit = async () => {
 *     try {
 *       await saveData();
 *       showMessage('Saved successfully!', 3000);
 *     } catch (error) {
 *       showMessage('Error saving data', 5000);
 *     }
 *   };
 *
 *   return (
 *     <div>
 *       <Form onSubmit={handleSubmit} />
 *       {visible && <Toast>{message}</Toast>}
 *     </div>
 *   );
 * };
 */

/**
 * ===================
 * 47. useTranslation
 * ===================
 *
 * i18n translation hook
 *
 * @example
 * const { t } = useTranslation();
 * t('common.welcome');
 */

export const useTranslation = () => {
  const t = (key: string, params?: Record<string, any>): string => {
    // Implementation would use next-intl
    return key;
  };

  return { t };
};

/**
 * Usage Example:
 *
 * const WelcomeMessage = () => {
 *   const { t } = useTranslation();
 *
 *   return (
 *     <div>
 *       <h1>{t('common.welcome')}</h1>
 *       <p>{t('common.description', { name: 'John' })}</p>
 *     </div>
 *   );
 * };
 */

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * ===================
 * acronym
 * ===================
 *
 * Generate acronym from string
 *
 * @example
 * acronym('John Doe') // Returns: 'JD'
 */

export const acronym = (str: string): string => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
};

/**
 * Usage Example:
 *
 * const userName = 'John Doe';
 * const initials = acronym(userName); // 'JD'
 *
 * <Avatar>{acronym(user.name)}</Avatar>
 */

/**
 * ===================
 * classNames
 * ===================
 *
 * Utility for conditional className strings
 *
 * @example
 * classNames('btn', isActive && 'active', 'btn-primary')
 */

export const classNames = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Usage Example:
 *
 * const Button = ({ primary, large, disabled }) => (
 *   <button
 *     className={classNames(
 *       'btn',
 *       primary && 'btn-primary',
 *       large && 'btn-lg',
 *       disabled && 'btn-disabled'
 *     )}
 *   >
 *     Click Me
 *   </button>
 * );
 */

/**
 * ===================
 * fileSizeUnit
 * ===================
 *
 * Format bytes to human-readable file size
 *
 * @example
 * fileSizeUnit(1536) // Returns: '1.5 KB'
 */

export const fileSizeUnit = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Usage Example:
 *
 * const FileInfo = ({ file }) => (
 *   <div>
 *     <p>{file.name}</p>
 *     <p>Size: {fileSizeUnit(file.size)}</p>
 *   </div>
 * );
 */

/**
 * ===================
 * isBrowser
 * ===================
 *
 * Check if code is running in browser
 *
 * @example
 * if (isBrowser()) {
 *   localStorage.setItem('key', 'value');
 * }
 */

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Usage Example:
 *
 * const MyComponent = () => {
 *   useEffect(() => {
 *     if (isBrowser()) {
 *       // Browser-only code
 *       window.addEventListener('scroll', handleScroll);
 *     }
 *   }, []);
 * };
 */

/**
 * ===================
 * isLastChild
 * ===================
 *
 * Check if index is last in array
 *
 * @example
 * isLastChild(array, index)
 */

export const isLastChild = <T,>(array: T[], index: number): boolean => {
  return index === array.length - 1;
};

/**
 * Usage Example:
 *
 * {items.map((item, index) => (
 *   <div key={item.id}>
 *     {item.name}
 *     {!isLastChild(items, index) && <span>, </span>}
 *   </div>
 * ))}
 */

/**
 * ===================
 * paginate
 * ===================
 *
 * Paginate array
 *
 * @example
 * paginate(data, 1, 10) // Get first page, 10 items per page
 */

export const paginate = <T,>(
  array: T[],
  page: number,
  pageSize: number
): T[] => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return array.slice(startIndex, endIndex);
};

/**
 * Usage Example:
 *
 * const [page, setPage] = useState(1);
 * const pageSize = 10;
 *
 * const paginatedData = paginate(allData, page, pageSize);
 * const totalPages = Math.ceil(allData.length / pageSize);
 *
 * <div>
 *   {paginatedData.map(item => <Item key={item.id} {...item} />)}
 *   <Pagination
 *     current={page}
 *     total={totalPages}
 *     onChange={setPage}
 *   />
 * </div>
 */

/**
 * ===================
 * reoderArray
 * ===================
 *
 * Reorder array items
 *
 * @example
 * reoderArray(array, 0, 2) // Move first item to third position
 */

export const reoderArray = <T,>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] => {
  const result = [...array];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};

/**
 * Usage Example:
 *
 * const [items, setItems] = useState(initialItems);
 *
 * const handleReorder = (fromIndex: number, toIndex: number) => {
 *   setItems(reoderArray(items, fromIndex, toIndex));
 * };
 */

/**
 * ===================
 * reorderDragable
 * ===================
 *
 * Reorder array for drag and drop
 * Compatible with react-beautiful-dnd
 *
 * @example
 * reorderDragable(list, result.source.index, result.destination.index)
 */

export const reorderDragable = <T,>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

/**
 * Usage Example:
 *
 * import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
 *
 * const DraggableList = () => {
 *   const [items, setItems] = useState(initialItems);
 *
 *   const onDragEnd = (result) => {
 *     if (!result.destination) return;
 *
 *     const reordered = reorderDragable(
 *       items,
 *       result.source.index,
 *       result.destination.index
 *     );
 *     setItems(reordered);
 *   };
 *
 *   return (
 *     <DragDropContext onDragEnd={onDragEnd}>
 *       <Droppable droppableId="list">
 *         {(provided) => (
 *           <div {...provided.droppableProps} ref={provided.innerRef}>
 *             {items.map((item, index) => (
 *               <Draggable key={item.id} draggableId={item.id} index={index}>
 *                 {(provided) => (
 *                   <div
 *                     ref={provided.innerRef}
 *                     {...provided.draggableProps}
 *                     {...provided.dragHandleProps}
 *                   >
 *                     {item.content}
 *                   </div>
 *                 )}
 *               </Draggable>
 *             ))}
 *             {provided.placeholder}
 *           </div>
 *         )}
 *       </Droppable>
 *     </DragDropContext>
 *   );
 * };
 */

/**
 * ===================
 * sleep
 * ===================
 *
 * Async delay utility
 *
 * @example
 * await sleep(1000); // Wait 1 second
 */

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Usage Example:
 *
 * const fetchWithDelay = async () => {
 *   setLoading(true);
 *   await sleep(1000); // Simulate loading
 *   const data = await fetchData();
 *   setLoading(false);
 * };
 */

/**
 * ===================
 * sortBy
 * ===================
 *
 * Sort array by property
 *
 * @example
 * sortBy(users, 'name', 'asc')
 */

export const sortBy = <T,>(
  array: T[],
  key: keyof T,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

/**
 * Usage Example:
 *
 * const sortedUsers = sortBy(users, 'name', 'asc');
 * const sortedByDate = sortBy(posts, 'createdAt', 'desc');
 */

/**
 * ===================
 * wildCardSearch
 * ===================
 *
 * Search with wildcard support
 *
 * @example
 * wildCardSearch(users, 'john', ['name', 'email'])
 */

export const wildCardSearch = <T extends Record<string, any>>(
  items: T[],
  query: string,
  keys: (keyof T)[]
): T[] => {
  if (!query) return items;

  const lowercaseQuery = query.toLowerCase();

  return items.filter(item =>
    keys.some(key => {
      const value = item[key];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(lowercaseQuery);
      }
      return false;
    })
  );
};

/**
 * Usage Example:
 *
 * const SearchComponent = () => {
 *   const [search, setSearch] = useState('');
 *
 *   const filteredUsers = wildCardSearch(
 *     users,
 *     search,
 *     ['name', 'email', 'role']
 *   );
 *
 *   return (
 *     <div>
 *       <Input
 *         value={search}
 *         onChange={(e) => setSearch(e.target.value)}
 *         placeholder="Search users..."
 *       />
 *       {filteredUsers.map(user => (
 *         <UserCard key={user.id} user={user} />
 *       ))}
 *     </div>
 *   );
 * };
 */

// =====================================================
// HOC (Higher Order Components)
// =====================================================

/**
 * ===================
 * withHeaderItem
 * ===================
 *
 * HOC that adds header item functionality
 *
 * @example
 * export default withHeaderItem(MyComponent);
 */

export const withHeaderItem = <P extends object>(
  Component: ComponentType<P>
): ComponentType<P> => {
  return (props: P) => {
    // HOC logic here
    return <Component {...props} />;
  };
};

/**
 * Usage Example:
 *
 * const UserMenu = ({ user }) => (
 *   <Dropdown>
 *     <Avatar src={user.avatar} />
 *     <Menu>
 *       <MenuItem>Profile</MenuItem>
 *       <MenuItem>Settings</MenuItem>
 *       <MenuItem>Logout</MenuItem>
 *     </Menu>
 *   </Dropdown>
 * );
 *
 * export default withHeaderItem(UserMenu);
 */

// =====================================================
// EXPORT SUMMARY
// =====================================================

/**
 * Components Export:
 * - 32 Shared Components
 * - 45+ UI Components
 * - 15 Custom Hooks
 * - 12 Utility Functions
 * - 1 HOC
 *
 * Import Examples:
 *
 * import AbbreviateNumber from '@/components/shared/AbbreviateNumber';
 * import { Button, Input, Card } from '@/components/ui';
 * import { useDebounce, useResponsive } from '@/utils/hooks';
 * import { classNames, fileSizeUnit, sortBy } from '@/utils';
 * import { withHeaderItem } from '@/utils/hoc';
 */

export default {
  version: '1.0.0',
  components: 32,
  uiComponents: 45,
  hooks: 15,
  utilities: 12,
  hoc: 1
};
