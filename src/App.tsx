import { MainLayout } from '@/layouts'
import { showDriver } from '@/utils/others'
import { Suspense, lazy, useEffect } from 'react'
import { CWindowType, type DownloadRecordingWindowData, type RecordWindowData, type WatchRecordingWindowData } from './models'
import { useWindowSystemStore } from './services/store/zustand'

const RecordingWindow = lazy(async () => import('@/components/feature/RecordingWindow/RecordingWindow'))
const WatchRecordingWindow = lazy(async () => import('@/components/feature/WatchRecordingWindow/WatchRecordingWindow'))
const DownloadRecordingWindow = lazy(async () => import('@/components/feature/DownloadRecordingWindow/DownloadRecordingWindow'))

function App () {
  const { windows } = useWindowSystemStore((state) => ({ windows: state.windows, addWindow: state.addWindow }))

  useEffect(() => {
    showDriver()
  }, [])

  return (
    <MainLayout>
      <div
        className='h-full flex flex-col justify-center items-center'
      >
        <Suspense>
          {
            windows.map((windowData) => {
              if (windowData.type === CWindowType.record) return <RecordingWindow windowData={windowData as RecordWindowData} key={windowData.id} />
              else if (windowData.type === CWindowType.watchRecord) return <WatchRecordingWindow windowData={windowData as WatchRecordingWindowData} key={windowData.id} />
              else if (windowData.type === CWindowType.downloadRecord) return <DownloadRecordingWindow windowData={windowData as DownloadRecordingWindowData} key={windowData.id} />
              return null
            })
          }
        </Suspense>
      </div>
    </MainLayout>
  )
}

export default App
