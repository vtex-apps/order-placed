import React from 'react'
import './styles.global.css'

const Skeleton = () => {
  const baseSkeletonPiece = 'pa3 br2 relative overflow-hidden'
  return (
    <div className="w-90 mw8 center pv10 flex flex-column justify-between items-center">
      <div
        className={`${baseSkeletonPiece} bg-muted-4 mv3 w-30 mv7`}
        style={{ height: `${24}px` }}
      >
        <div className="skeleton-shimmer" />
      </div>
      <div
        className={`${baseSkeletonPiece} bg-muted-4 mv2 w-75-m w-80`}
        style={{ height: `${20}px` }}
      >
        <div className="skeleton-shimmer" />
      </div>
      <div
        className={`${baseSkeletonPiece} bg-muted-4 mv2 w-60`}
        style={{ height: `${20}px` }}
      >
        <div className="skeleton-shimmer" />
      </div>
      <div className="flex justify-center pv8 w-100">
        <div
          className={`${baseSkeletonPiece} bg-muted-4 mv3 w-30 w-20-m mr3`}
          style={{ height: `${36}px` }}
        >
          <div className="skeleton-shimmer" />
        </div>
        <div
          className={`${baseSkeletonPiece} bg-muted-4 mv3 w-30 w-20-m ml3`}
          style={{ height: `${36}px` }}
        >
          <div className="skeleton-shimmer" />
        </div>
      </div>
    </div>
  )
}

export default Skeleton
