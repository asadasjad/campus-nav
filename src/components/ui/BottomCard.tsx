'use client'

import { motion } from 'framer-motion'
import { useAppState } from '@/store/useAppState'

export default function BottomCard({ mode }: { mode: string }) {
  const { setMode } = useAppState()

  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      className='absolute bottom-0 w-full bg-white rounded-t-3xl shadow-2xl p-4 z-20'
    >
      {mode === 'explore' && (
        <>
          <div className='w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3' />

          <h2 className='text-lg font-semibold mb-2'>Where to?</h2>

          <input
            placeholder='Search destinations'
            className='w-full p-3 border rounded-lg mb-3'
          />

          <div className='flex gap-2 overflow-x-auto'>
            <button className='bg-gray-100 px-3 py-2 rounded-full'>
              🏠 Home
            </button>
            <button className='bg-gray-100 px-3 py-2 rounded-full'>
              💼 Work
            </button>
            <button className='bg-gray-100 px-3 py-2 rounded-full'>
              ☕ Cafe
            </button>
          </div>

          <button
            className='mt-4 w-full bg-blue-500 text-white py-3 rounded-lg'
            onClick={() => setMode('navigating')}
          >
            Start Navigation
          </button>
        </>
      )}

      {mode === 'navigating' && (
        <>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm text-gray-500'>ETA</p>
              <h2 className='text-xl font-bold'>15 min</h2>
            </div>

            <button
              className='bg-green-500 text-white px-4 py-2 rounded-lg'
              onClick={() => setMode('indoor')}
            >
              Enter
            </button>
          </div>
        </>
      )}

      {mode === 'indoor' && (
        <>
          <h2 className='text-lg font-semibold'>Indoor Navigation Active</h2>
        </>
      )}
    </motion.div>
  )
}
