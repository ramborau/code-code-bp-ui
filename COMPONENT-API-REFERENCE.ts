/**
 * =============================================================================
 * ECME UI COMPONENT LIBRARY - COMPLETE API REFERENCE
 * =============================================================================
 *
 * This file contains TypeScript interfaces, examples, and usage documentation
 * for every component in the Ecme UI library based on UI-ELEMENTS.MD and CORE.MD
 *
 * Import Path Convention: @/demo/src/components/...
 *
 * Last Updated: 2025
 * =============================================================================
 */

// =============================================================================
// COMMON COMPONENTS
// =============================================================================

/**
 * BUTTON COMPONENT
 * Path: @/demo/src/components/ui/Button
 *
 * Interactive button with multiple variants, sizes, and states
 */
export interface ButtonProps {
  /** Render button as a different element (default: 'button') */
  asElement?: 'button' | 'a' | 'div'
  /** Active state styling */
  active?: boolean
  /** Full width button */
  block?: boolean
  /** Enable click feedback animation */
  clickFeedback?: boolean
  /** Custom color class function */
  customColorClass?: (state: { active: boolean; unclickable: boolean }) => string
  /** Disabled state */
  disabled?: boolean
  /** Icon to display (string or ReactNode) */
  icon?: string | React.ReactNode
  /** Loading state with spinner */
  loading?: boolean
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Button shape */
  shape?: 'round' | 'circle' | 'none'
  /** Button size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Button variant */
  variant?: 'solid' | 'plain' | 'default'
  /** Icon alignment when button has both icon and children */
  iconAlignment?: 'start' | 'end'
  /** Button content */
  children?: React.ReactNode
  /** Additional CSS classes */
  className?: string
}

// Example Usage:
const ButtonExample = () => {
  return (
    <>
      {/* Primary solid button */}
      <Button variant="solid" size="md">
        Submit
      </Button>

      {/* Button with icon */}
      <Button variant="default" icon={<FiUser />} iconAlignment="start">
        Profile
      </Button>

      {/* Loading button */}
      <Button variant="solid" loading={true}>
        Saving...
      </Button>

      {/* Icon-only button */}
      <Button variant="plain" icon={<FiSearch />} shape="circle" />

      {/* Full width button */}
      <Button variant="solid" block>
        Continue
      </Button>
    </>
  )
}

// =============================================================================
// FEEDBACK COMPONENTS
// =============================================================================

/**
 * ALERT COMPONENT
 * Path: @/demo/src/components/ui/Alert
 *
 * Display important messages with different severity levels
 */
export interface AlertProps {
  /** Alert type */
  type?: 'success' | 'error' | 'warning' | 'info'
  /** Show close button */
  closable?: boolean
  /** Close handler */
  onClose?: () => void
  /** Alert title */
  title?: string
  /** Alert content */
  children?: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Custom icon */
  customIcon?: React.ReactNode
  /** Show icon */
  showIcon?: boolean
}

// Example:
const AlertExample = () => {
  return (
    <>
      <Alert type="success" title="Success!" closable>
        Your changes have been saved successfully.
      </Alert>

      <Alert type="error" showIcon>
        Something went wrong. Please try again.
      </Alert>

      <Alert type="warning" title="Warning">
        This action cannot be undone.
      </Alert>

      <Alert type="info">
        <div>
          <p>Did you know?</p>
          <p>You can customize your dashboard layout.</p>
        </div>
      </Alert>
    </>
  )
}

/**
 * DIALOG COMPONENT
 * Path: @/demo/src/components/ui/Dialog
 *
 * Modal dialog for user interactions
 */
export interface DialogProps {
  /** Dialog open state */
  isOpen: boolean
  /** Close handler */
  onClose: () => void
  /** Dialog title */
  title?: string
  /** Dialog size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Close on overlay click */
  closable?: boolean
  /** Show close button */
  showCloseButton?: boolean
  /** Dialog content */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Footer content */
  footer?: React.ReactNode
}

// Example:
const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        size="md"
        footer={
          <div className="flex gap-3 justify-end">
            <Button variant="default" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" onClick={handleConfirm}>
              Confirm
            </Button>
          </div>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Dialog>
    </>
  )
}

/**
 * TOAST COMPONENT
 * Path: @/demo/src/components/ui/Toast
 *
 * Temporary notification messages
 */
export interface ToastOptions {
  /** Toast type */
  type?: 'success' | 'error' | 'warning' | 'info'
  /** Toast title */
  title?: string
  /** Toast message */
  message: string
  /** Duration in milliseconds (0 = no auto-dismiss) */
  duration?: number
  /** Toast position */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

// Example:
const ToastExample = () => {
  const toast = useToast()

  const showSuccessToast = () => {
    toast.success('Profile updated successfully!')
  }

  const showErrorToast = () => {
    toast.error('Failed to save changes')
  }

  const showCustomToast = () => {
    toast.push({
      type: 'info',
      title: 'New Feature',
      message: 'Check out our new dashboard!',
      duration: 5000,
      position: 'top-right',
    })
  }

  return (
    <>
      <Button onClick={showSuccessToast}>Success Toast</Button>
      <Button onClick={showErrorToast}>Error Toast</Button>
      <Button onClick={showCustomToast}>Custom Toast</Button>
    </>
  )
}

/**
 * SPINNER COMPONENT
 * Path: @/demo/src/components/ui/Spinner
 *
 * Loading spinner indicator
 */
export interface SpinnerProps {
  /** Spinner size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Spinner color */
  color?: string
  /** Enable theme colors */
  enableTheme?: boolean
  /** Additional CSS classes */
  className?: string
}

// Example:
const SpinnerExample = () => {
  return (
    <>
      <Spinner size="sm" />
      <Spinner size="md" enableTheme />
      <Spinner size="lg" color="text-blue-500" />
    </>
  )
}

// =============================================================================
// DATA DISPLAY COMPONENTS
// =============================================================================

/**
 * AVATAR COMPONENT
 * Path: @/demo/src/components/ui/Avatar
 *
 * User profile image with fallback
 */
export interface AvatarProps {
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
  /** Image source */
  src?: string
  /** Alt text */
  alt?: string
  /** Shape */
  shape?: 'circle' | 'rounded' | 'square'
  /** Icon fallback */
  icon?: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Text content (initials) */
  children?: React.ReactNode
}

// Example:
const AvatarExample = () => {
  return (
    <>
      <Avatar src="/img/avatars/thumb-1.jpg" alt="John Doe" size="md" />
      <Avatar size="lg" shape="rounded">JD</Avatar>
      <Avatar icon={<FiUser />} size="sm" />
    </>
  )
}

/**
 * BADGE COMPONENT
 * Path: @/demo/src/components/ui/Badge
 *
 * Status indicators and counters
 */
export interface BadgeProps {
  /** Badge content */
  content?: string | number
  /** Badge color */
  color?: string
  /** Inner dot mode */
  innerClass?: string
  /** Additional CSS classes */
  className?: string
  /** Children to wrap */
  children?: React.ReactNode
}

// Example:
const BadgeExample = () => {
  return (
    <>
      <Badge content="New" color="bg-red-500" />
      <Badge content={5} color="bg-blue-500">
        <FiBell />
      </Badge>
      <Badge content="Pro" color="bg-green-500" />
    </>
  )
}

/**
 * CARD COMPONENT
 * Path: @/demo/src/components/ui/Card
 *
 * Content container card
 */
export interface CardProps {
  /** Card header */
  header?: React.ReactNode
  /** Card footer */
  footer?: React.ReactNode
  /** Card header extra content */
  headerExtra?: React.ReactNode
  /** Clickable card */
  clickable?: boolean
  /** Click handler */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
  /** Body padding */
  bodyClass?: string
  /** Header class */
  headerClass?: string
  /** Footer class */
  footerClass?: string
  /** Card content */
  children: React.ReactNode
}

// Example:
const CardExample = () => {
  return (
    <>
      <Card header="Card Title" headerExtra={<Button size="xs">Action</Button>}>
        <p>Card content goes here...</p>
      </Card>

      <Card
        clickable
        onClick={handleCardClick}
        footer={<div className="text-sm text-gray-500">Last updated: 2 hours ago</div>}
      >
        <h3>Clickable Card</h3>
        <p>Click anywhere on this card</p>
      </Card>
    </>
  )
}

/**
 * TABLE COMPONENT
 * Path: @/demo/src/components/ui/Table
 *
 * Data table with sorting, filtering, pagination
 */
export interface TableProps {
  /** Table columns */
  columns: Array<{
    header: string
    accessor: string
    cell?: (row: any) => React.ReactNode
    sortable?: boolean
  }>
  /** Table data */
  data: any[]
  /** Loading state */
  loading?: boolean
  /** Enable sorting */
  sortable?: boolean
  /** Enable selection */
  selectable?: boolean
  /** Selected rows */
  selectedRows?: any[]
  /** Selection change handler */
  onSelectChange?: (selected: any[]) => void
  /** Additional CSS classes */
  className?: string
}

// Example:
const TableExample = () => {
  const columns = [
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email' },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => <Badge content={row.status} />,
    },
    {
      header: 'Actions',
      accessor: 'actions',
      cell: (row) => (
        <div className="flex gap-2">
          <Button size="xs">Edit</Button>
          <Button size="xs" variant="plain">Delete</Button>
        </div>
      ),
    },
  ]

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
  ]

  return <Table columns={columns} data={data} sortable selectable />
}

// =============================================================================
// FORM COMPONENTS
// =============================================================================

/**
 * INPUT COMPONENT
 * Path: @/demo/src/components/ui/Input
 *
 * Text input field
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Prefix content */
  prefix?: React.ReactNode
  /** Suffix content */
  suffix?: React.ReactNode
  /** Invalid state */
  invalid?: boolean
  /** Disabled state */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
}

// Example:
const InputExample = () => {
  return (
    <>
      <Input placeholder="Enter your name" size="md" />
      <Input prefix={<FiSearch />} placeholder="Search..." />
      <Input suffix="@example.com" placeholder="username" />
      <Input type="email" invalid placeholder="Invalid email" />
    </>
  )
}

/**
 * FORM CONTROL COMPONENT
 * Path: @/demo/src/components/ui/Form/FormControl
 *
 * Form field wrapper with label and validation
 */
export interface FormControlProps {
  /** Field label */
  label?: string
  /** Required field */
  required?: boolean
  /** Error message */
  error?: string
  /** Help text */
  helperText?: string
  /** Label position */
  labelPosition?: 'top' | 'left'
  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
  /** Form field */
  children: React.ReactNode
}

// Example:
const FormControlExample = () => {
  return (
    <>
      <FormControl label="Email" required error={errors.email}>
        <Input type="email" placeholder="Enter email" />
      </FormControl>

      <FormControl label="Username" helperText="Choose a unique username">
        <Input placeholder="Enter username" />
      </FormControl>

      <FormControl labelPosition="left" label="Remember me">
        <Checkbox />
      </FormControl>
    </>
  )
}

/**
 * SELECT COMPONENT
 * Path: @/demo/src/components/ui/Select
 *
 * Dropdown selection
 */
export interface SelectProps {
  /** Select options */
  options: Array<{ value: string | number; label: string }>
  /** Selected value */
  value?: string | number
  /** Change handler */
  onChange?: (value: string | number) => void
  /** Placeholder */
  placeholder?: string
  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Disabled */
  disabled?: boolean
  /** Searchable */
  searchable?: boolean
  /** Multi-select */
  multiple?: boolean
  /** Additional CSS classes */
  className?: string
}

// Example:
const SelectExample = () => {
  const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' },
  ]

  return (
    <>
      <Select
        options={options}
        value={selectedRole}
        onChange={setSelectedRole}
        placeholder="Select role"
      />

      <Select options={options} searchable placeholder="Search role" />

      <Select options={options} multiple placeholder="Select multiple" />
    </>
  )
}

/**
 * CHECKBOX COMPONENT
 * Path: @/demo/src/components/ui/Checkbox
 *
 * Checkbox input
 */
export interface CheckboxProps {
  /** Checked state */
  checked?: boolean
  /** Change handler */
  onChange?: (checked: boolean) => void
  /** Disabled */
  disabled?: boolean
  /** Indeterminate state */
  indeterminate?: boolean
  /** Checkbox label */
  children?: React.ReactNode
  /** Additional CSS classes */
  className?: string
}

// Example:
const CheckboxExample = () => {
  return (
    <>
      <Checkbox checked={agreed} onChange={setAgreed}>
        I agree to the terms
      </Checkbox>

      <Checkbox indeterminate>Select All</Checkbox>

      <Checkbox disabled>Disabled option</Checkbox>
    </>
  )
}

/**
 * RADIO COMPONENT
 * Path: @/demo/src/components/ui/Radio
 *
 * Radio button input
 */
export interface RadioProps {
  /** Radio value */
  value: string | number
  /** Checked state */
  checked?: boolean
  /** Change handler */
  onChange?: (value: string | number) => void
  /** Disabled */
  disabled?: boolean
  /** Radio label */
  children?: React.ReactNode
  /** Name attribute */
  name?: string
  /** Additional CSS classes */
  className?: string
}

// Radio Group
export interface RadioGroupProps {
  /** Radio options */
  options: Array<{ value: string | number; label: string }>
  /** Selected value */
  value?: string | number
  /** Change handler */
  onChange?: (value: string | number) => void
  /** Vertical layout */
  vertical?: boolean
  /** Additional CSS classes */
  className?: string
}

// Example:
const RadioExample = () => {
  const [selected, setSelected] = useState('option1')

  return (
    <>
      <Radio value="option1" checked={selected === 'option1'} onChange={setSelected}>
        Option 1
      </Radio>
      <Radio value="option2" checked={selected === 'option2'} onChange={setSelected}>
        Option 2
      </Radio>

      {/* Using Radio Group */}
      <RadioGroup
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ]}
        value={size}
        onChange={setSize}
        vertical
      />
    </>
  )
}

/**
 * DATE PICKER COMPONENT
 * Path: @/demo/src/components/ui/DatePicker
 *
 * Date and time selection
 */
export interface DatePickerProps {
  /** Selected date */
  value?: Date
  /** Change handler */
  onChange?: (date: Date) => void
  /** Placeholder */
  placeholder?: string
  /** Date format */
  format?: string
  /** Size */
  size?: 'xs' | 'sm' | 'md' | 'lg'
  /** Disabled */
  disabled?: boolean
  /** Enable time selection */
  enableTime?: boolean
  /** Date range mode */
  range?: boolean
  /** Min date */
  minDate?: Date
  /** Max date */
  maxDate?: Date
  /** Additional CSS classes */
  className?: string
}

// Example:
const DatePickerExample = () => {
  return (
    <>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select date"
      />

      <DatePicker
        value={selectedDateTime}
        onChange={setSelectedDateTime}
        enableTime
        format="YYYY-MM-DD HH:mm"
      />

      <DatePicker range placeholder="Select date range" />
    </>
  )
}

/**
 * UPLOAD COMPONENT
 * Path: @/demo/src/components/ui/Upload
 *
 * File upload component
 */
export interface UploadProps {
  /** File list */
  fileList?: File[]
  /** Change handler */
  onChange?: (files: File[]) => void
  /** Accept file types */
  accept?: string
  /** Multiple files */
  multiple?: boolean
  /** Max file size in bytes */
  maxSize?: number
  /** Upload mode */
  mode?: 'default' | 'dragger'
  /** Disabled */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
  /** Upload children */
  children?: React.ReactNode
}

// Example:
const UploadExample = () => {
  return (
    <>
      <Upload onChange={handleFileChange} accept="image/*">
        <Button icon={<FiUpload />}>Upload Image</Button>
      </Upload>

      <Upload mode="dragger" multiple accept=".pdf,.doc,.docx">
        <div className="text-center p-8">
          <FiUpload className="text-4xl mx-auto mb-2" />
          <p>Click or drag files to upload</p>
        </div>
      </Upload>
    </>
  )
}

// =============================================================================
// NAVIGATION COMPONENTS
// =============================================================================

/**
 * TABS COMPONENT
 * Path: @/demo/src/components/ui/Tabs
 *
 * Tabbed content navigation
 */
export interface TabsProps {
  /** Active tab key */
  value: string
  /** Change handler */
  onChange?: (key: string) => void
  /** Tab variant */
  variant?: 'default' | 'pill'
  /** Additional CSS classes */
  className?: string
  /** Tab items */
  children: React.ReactNode
}

export interface TabListProps {
  children: React.ReactNode
  className?: string
}

export interface TabNavProps {
  /** Tab key */
  value: string
  /** Disabled */
  disabled?: boolean
  /** Icon */
  icon?: React.ReactNode
  /** Tab label */
  children: React.ReactNode
}

export interface TabContentProps {
  /** Tab key */
  value: string
  /** Tab content */
  children: React.ReactNode
}

// Example:
const TabsExample = () => {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <Tabs value={activeTab} onChange={setActiveTab} variant="pill">
      <TabList>
        <TabNav value="profile" icon={<FiUser />}>
          Profile
        </TabNav>
        <TabNav value="settings">Settings</TabNav>
        <TabNav value="billing">Billing</TabNav>
      </TabList>

      <TabContent value="profile">
        <ProfileSettings />
      </TabContent>
      <TabContent value="settings">
        <AppSettings />
      </TabContent>
      <TabContent value="billing">
        <BillingInfo />
      </TabContent>
    </Tabs>
  )
}

/**
 * PAGINATION COMPONENT
 * Path: @/demo/src/components/ui/Pagination
 *
 * Page navigation
 */
export interface PaginationProps {
  /** Current page */
  currentPage: number
  /** Total pages */
  totalPages: number
  /** Change handler */
  onChange: (page: number) => void
  /** Show page size selector */
  showPageSize?: boolean
  /** Page size */
  pageSize?: number
  /** Page size options */
  pageSizeOptions?: number[]
  /** Page size change handler */
  onPageSizeChange?: (size: number) => void
  /** Additional CSS classes */
  className?: string
}

// Example:
const PaginationExample = () => {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onChange={setCurrentPage}
      showPageSize
      pageSize={pageSize}
      pageSizeOptions={[10, 20, 50, 100]}
      onPageSizeChange={setPageSize}
    />
  )
}

/**
 * MENU COMPONENT
 * Path: @/demo/src/components/ui/Menu
 *
 * Navigation menu
 */
export interface MenuProps {
  /** Menu items */
  items: MenuItem[]
  /** Variant */
  variant?: 'light' | 'dark' | 'transparent'
  /** Collapsed state */
  collapsed?: boolean
  /** Additional CSS classes */
  className?: string
}

export interface MenuItem {
  /** Menu item key */
  key: string
  /** Menu item label */
  label: string
  /** Icon */
  icon?: React.ReactNode
  /** Link path */
  path?: string
  /** Submenu items */
  children?: MenuItem[]
  /** Disabled */
  disabled?: boolean
}

// Example:
const MenuExample = () => {
  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <FiHome />,
      path: '/dashboard',
    },
    {
      key: 'users',
      label: 'Users',
      icon: <FiUsers />,
      children: [
        { key: 'user-list', label: 'User List', path: '/users' },
        { key: 'user-create', label: 'Create User', path: '/users/create' },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <FiSettings />,
      path: '/settings',
    },
  ]

  return <Menu items={menuItems} variant="light" />
}

// =============================================================================
// SHARED COMPONENTS
// =============================================================================

/**
 * DATA TABLE COMPONENT
 * Path: @/demo/src/components/shared/DataTable
 *
 * Advanced data table with all features
 */
export interface DataTableProps<T> {
  /** Table columns (TanStack Table ColumnDef) */
  columns: ColumnDef<T>[]
  /** Table data */
  data: T[]
  /** Loading state */
  loading?: boolean
  /** Pagination state */
  pagination?: {
    pageIndex: number
    pageSize: number
  }
  /** Pagination change handler */
  onPaginationChange?: (pagination: any) => void
  /** Sorting state */
  sorting?: Array<{ id: string; desc: boolean }>
  /** Sorting change handler */
  onSortingChange?: (sorting: any) => void
  /** Selection state */
  rowSelection?: Record<string, boolean>
  /** Selection change handler */
  onRowSelectionChange?: (selection: any) => void
  /** Additional CSS classes */
  className?: string
}

// Example:
const DataTableExample = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Email',
        accessorKey: 'email',
      },
      {
        header: 'Role',
        accessorKey: 'role',
        cell: ({ getValue }) => {
          const role = getValue() as string
          return <Badge content={role} />
        },
      },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Button size="xs" onClick={() => handleEdit(row.original)}>
              Edit
            </Button>
            <Button size="xs" variant="plain" onClick={() => handleDelete(row.original)}>
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  )

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination={pagination}
      onPaginationChange={setPagination}
    />
  )
}

/**
 * RICH TEXT EDITOR COMPONENT
 * Path: @/demo/src/components/shared/RichTextEditor
 *
 * WYSIWYG text editor based on TipTap
 */
export interface RichTextEditorProps {
  /** Editor content (HTML string) */
  content?: string
  /** Change handler */
  onChange?: (html: string) => void
  /** Placeholder */
  placeholder?: string
  /** Editable */
  editable?: boolean
  /** Additional CSS classes */
  className?: string
}

// Example:
const RichTextEditorExample = () => {
  const [content, setContent] = useState('')

  return (
    <RichTextEditor
      content={content}
      onChange={setContent}
      placeholder="Start writing..."
      editable={true}
    />
  )
}

/**
 * IMAGE GALLERY COMPONENT
 * Path: @/demo/src/components/shared/ImageGallery
 *
 * Image gallery viewer with lightbox
 */
export interface ImageGalleryProps {
  /** Image list */
  images: Array<{ src: string; alt?: string; thumbnail?: string }>
  /** Additional CSS classes */
  className?: string
}

// Example:
const ImageGalleryExample = () => {
  const images = [
    { src: '/img/products/product-1.jpg', alt: 'Product 1' },
    { src: '/img/products/product-2.jpg', alt: 'Product 2' },
    { src: '/img/products/product-3.jpg', alt: 'Product 3' },
  ]

  return <ImageGallery images={images} />
}

/**
 * CHART COMPONENT
 * Path: @/demo/src/components/shared/Chart
 *
 * Data visualization charts (Recharts wrapper)
 */
export interface ChartProps {
  /** Chart type */
  type: 'line' | 'bar' | 'area' | 'pie' | 'donut'
  /** Chart data */
  data: any[]
  /** X-axis key */
  xKey?: string
  /** Y-axis keys */
  yKeys?: string[]
  /** Chart height */
  height?: number
  /** Additional configuration */
  config?: any
  /** Additional CSS classes */
  className?: string
}

// Example:
const ChartExample = () => {
  const data = [
    { month: 'Jan', sales: 4000, revenue: 2400 },
    { month: 'Feb', sales: 3000, revenue: 1398 },
    { month: 'Mar', sales: 2000, revenue: 9800 },
    { month: 'Apr', sales: 2780, revenue: 3908 },
    { month: 'May', sales: 1890, revenue: 4800 },
    { month: 'Jun', sales: 2390, revenue: 3800 },
  ]

  return (
    <>
      <Chart type="line" data={data} xKey="month" yKeys={['sales', 'revenue']} height={300} />

      <Chart type="bar" data={data} xKey="month" yKeys={['sales']} height={250} />

      <Chart type="area" data={data} xKey="month" yKeys={['revenue']} height={300} />
    </>
  )
}

// =============================================================================
// UTILITY HOOKS
// =============================================================================

/**
 * useTheme Hook
 * Path: @/demo/src/utils/hooks/useTheme
 *
 * Theme management (mode, schema, direction)
 */
export interface ThemeState {
  /** Current mode */
  mode: 'light' | 'dark'
  /** Set mode */
  setMode: (mode: 'light' | 'dark') => void
  /** Current theme schema */
  themeSchema: string
  /** Set theme schema */
  setSchema: (schema: string) => void
  /** Current direction */
  direction: 'ltr' | 'rtl'
  /** Set direction */
  setDirection: (direction: 'ltr' | 'rtl') => void
}

// Example:
const useThemeExample = () => {
  const mode = useTheme((state) => state.mode)
  const setMode = useTheme((state) => state.setMode)
  const themeSchema = useTheme((state) => state.themeSchema)
  const setSchema = useTheme((state) => state.setSchema)

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const changeTheme = (schema: string) => {
    setSchema(schema)
  }

  return { mode, toggleMode, themeSchema, changeTheme }
}

/**
 * useDebounce Hook
 * Path: @/demo/src/utils/hooks/useDebounce
 *
 * Debounce values
 */
// Example:
const useDebounceExample = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      fetchSearchResults(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  )
}

/**
 * useResponsive Hook
 * Path: @/demo/src/utils/hooks/useResponsive
 *
 * Responsive breakpoint detection
 */
export interface ResponsiveState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  currentBreakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

// Example:
const useResponsiveExample = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  )
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * classNames Function
 * Path: @/demo/src/utils/classNames
 *
 * Conditional className merging
 */
export function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

// Example:
const classNamesExample = () => {
  const isActive = true
  const isDisabled = false

  const buttonClass = classNames(
    'button',
    isActive && 'button-active',
    isDisabled && 'button-disabled',
    'button-primary'
  )
  // Result: "button button-active button-primary"

  return <button className={buttonClass}>Click me</button>
}

/**
 * formatFileSize Function
 * Path: @/demo/src/utils/fileSizeUnit
 *
 * Format file sizes
 */
export function formatFileSize(bytes: number): string {
  // Implementation
}

// Example:
const fileSizeExample = () => {
  const size = formatFileSize(1024000) // "1 MB"
  const size2 = formatFileSize(2048) // "2 KB"

  return <div>File size: {size}</div>
}

/**
 * wildCardSearch Function
 * Path: @/demo/src/utils/wildCardSearch
 *
 * Wildcard search matching
 */
export function wildCardSearch(input: string, query: string): boolean {
  // Implementation
}

// Example:
const searchExample = () => {
  const results = data.filter((item) => wildCardSearch(item.name, searchQuery))

  return <div>{/* Display results */}</div>
}

// =============================================================================
// LAYOUT TYPES
// =============================================================================

/**
 * Layout Configuration
 * Based on CORE.MD documentation
 */
export type LayoutType =
  | 'blank'
  | 'collapsibleSide'
  | 'stackedSide'
  | 'topBarClassic'
  | 'framelessSide'
  | 'contentOverlay'

export interface LayoutConfig {
  /** Layout type */
  type: LayoutType
  /** Side navigation collapsed state */
  sideNavCollapse?: boolean
}

/**
 * Route Meta Configuration
 */
export interface RouteMeta {
  /** Page container type */
  pageContainerType?: 'default' | 'gutterless' | 'contained'
  /** Page background type */
  pageBackgroundType?: 'default' | 'plain'
  /** Page header configuration */
  header?: {
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    contained?: boolean
    extraHeader?: string | React.ReactNode
  }
  /** Show footer */
  footer?: boolean
  /** Override layout */
  layout?: LayoutType
}

/**
 * Route Configuration
 */
export interface RouteConfig {
  /** Route key */
  key: string
  /** User authority (roles) */
  authority: string[]
  /** Route metadata */
  meta?: RouteMeta
  /** Dynamic route flag */
  dynamicRoute?: boolean
}

// Example:
const routeConfigExample = {
  '/dashboard': {
    key: 'dashboard',
    authority: ['admin', 'user'],
    meta: {
      pageContainerType: 'default',
      header: {
        title: 'Dashboard',
        description: 'Welcome to your dashboard',
      },
    },
  } as RouteConfig,
  '/users/[id]': {
    key: 'users.detail',
    authority: ['admin'],
    meta: {
      pageContainerType: 'contained',
      layout: 'collapsibleSide',
    },
    dynamicRoute: true,
  } as RouteConfig,
}

// =============================================================================
// END OF API REFERENCE
// =============================================================================

/**
 * INTEGRATION GUIDE
 *
 * 1. Import components from demo folder:
 *    import Button from '@/demo/src/components/ui/Button'
 *
 * 2. Use components with TypeScript:
 *    <Button variant="solid" size="md" onClick={handleClick}>Click</Button>
 *
 * 3. Implement forms with validation:
 *    Use FormControl + Input + validation library (Zod, Yup)
 *
 * 4. Handle states:
 *    - Loading: Show Spinner or Skeleton
 *    - Error: Show Alert or Toast
 *    - Empty: Show custom empty state
 *
 * 5. Accessibility:
 *    - Add aria-label attributes
 *    - Ensure keyboard navigation
 *    - Use semantic HTML
 *    - Test with screen readers
 *
 * 6. Responsive design:
 *    - Use useResponsive hook
 *    - Apply responsive Tailwind classes
 *    - Test on mobile, tablet, desktop
 *
 * 7. Theming:
 *    - Use useTheme hook
 *    - Support dark mode with dark: classes
 *    - Use CSS variables for colors
 *
 * 8. Performance:
 *    - Lazy load components with React.lazy
 *    - Use React.memo for expensive components
 *    - Implement pagination for large lists
 *    - Optimize images with next/image
 */

export default {}
