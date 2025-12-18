/**
 * Admin Layout (관리자 페이지 공통 레이아웃)
 * 
 * 설계 의도:
 * - Sidebar + Topbar + Content 구조
 * - 디자인 단순, 기능 우선
 * - 모바일: Sidebar 접기/펼치기
 */

import { ReactNode, useState } from 'react'
import { cn } from '../../utils/cn'

export interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/admin' },
    { icon: '🎨', label: 'Design Systems', href: '/admin/systems' },
    { icon: '👥', label: 'Users', href: '/admin/users' },
    { icon: '⚙️', label: 'Settings', href: '/admin/settings' },
  ]

  return (
    <div className="h-screen flex bg-gray-50">
      
      {/* Sidebar */}
      <aside
        className={cn(
          'bg-gray-900 text-white transition-all duration-300',
          isSidebarOpen ? 'w-64' : 'w-20',
          'hidden md:flex flex-col'
        )}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-gray-800">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
            B
          </div>
          {isSidebarOpen && (
            <span className="ml-3 font-bold text-lg">Baikal Admin</span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 py-6">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={cn(
                'flex items-center px-6 py-3 hover:bg-gray-800 transition-colors',
                'text-gray-300 hover:text-white'
              )}
            >
              <span className="text-2xl">{item.icon}</span>
              {isSidebarOpen && (
                <span className="ml-3 font-medium">{item.label}</span>
              )}
            </a>
          ))}
        </nav>

        {/* Collapse Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="h-14 flex items-center justify-center border-t border-gray-800 hover:bg-gray-800 transition-colors"
        >
          <span className="text-xl">{isSidebarOpen ? '◀' : '▶'}</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-semibold">A</span>
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout

/**
 * 사용 예시:
 * 
 * // pages/admin/Dashboard.tsx
 * export default function Dashboard() {
 *   return (
 *     <AdminLayout>
 *       <div className="space-y-6">
 *         <h2 className="text-2xl font-bold">Dashboard</h2>
 *         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 *           <StatCard title="Total Users" value="1,234" />
 *           <StatCard title="Active Systems" value="56" />
 *         </div>
 *       </div>
 *     </AdminLayout>
 *   )
 * }
 */
