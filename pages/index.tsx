import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import QuickFacts from './components/QuickFacts'
import Layout from './components/Layout'


const Home: NextPage = () => {

  return (
    <div>
      <Layout>
        <QuickFacts />
      </Layout>
    </div>
    
    
  )
}

export default Home
