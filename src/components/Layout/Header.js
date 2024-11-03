'use client'
import { useContext, useState } from 'react'
import {
  Dialog,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  PencilSquareIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  TrashIcon,
  UserPlusIcon,
  PencilIcon,
  Square2StackIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/20/solid'
import {
  Bars3Icon,
  LightBulbIcon,
  MoonIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact Us', href: '#contact' },
]

const social = [
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* <header className='fixed bg-white opacity-80 shadow-lg rounded-xl inset-x-0 top-3 left-2 right-2 z-50'> */}
      {/* DESKTOP */}
      <nav
        className=' mx-auto flex max-w-7xl items-center justify-between md:px-8 bg-white opacity-90 rounded-xl inset-x-0'
        aria-label='Global'
      >
        <div className='flex md:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>White Rose Design</span>
            <img
              height={100}
              width={100}
              className='h-24 w-auto'
              src='/logo.png'
              alt='White Rose Logo'
            />
          </a>
        </div>
        <div className='flex md:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6 ' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden md:flex md:items-center md:gap-x-20'>
          <>
            {/* PC Hamburger Button */}
            <div className='flex items-center text-sm h-16 w-16 font-semibold leading-6 text-gray-900'>
              <Menu>
                <MenuButton className='inline-flex gap-2 rounded-md bg-white py-1.5 px-3 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-300 data-[hover]:text-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
                  <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                </MenuButton>
                <MenuItems
                  transition
                  anchor='bottom end'
                  className='w-52 z-50 origin-top-right rounded-xl border border-white/5 bg-white/90 p-1 text-sm/6 text-gray-400 transition duration-300 ease-in-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
                >
                  {navigation.map((item) => (
                    <MenuItem>
                      <a
                        href={item.href}
                        className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'
                      >
                        <PencilIcon className='size-4 fill-black/60' />
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <div className='group flex w-full justify-evenly items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
                      {social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='text-gray-400 hover:text-black/60'
                        >
                          <span className='sr-only'>{item.name}</span>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </a>
                      ))}
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </>
        </div>
      </nav>

      {/* </header> */}

      <header>
        <Dialog
          as='div'
          className='md:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  height={100}
                  width={100}
                  className='h-10 w-auto'
                  src='/logo.png'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-darkCream'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkCream`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
