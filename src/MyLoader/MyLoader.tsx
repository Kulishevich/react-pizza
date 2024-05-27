import React, { FC } from "react"
import ContentLoader from "react-content-loader"
import styles from './MyLoader.module.scss'

export const MyLoader: FC = () => (
  <div className={styles.main}>
    <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="131" r="130" /> 
      <rect x="-2" y="315" rx="10" ry="10" width="280" height="85" /> 
      <rect x="0" y="271" rx="0" ry="0" width="280" height="24" /> 
      <rect x="124" y="418" rx="25" ry="25" width="155" height="40" /> 
      <rect x="2" y="428" rx="0" ry="0" width="89" height="27" />
    </ContentLoader>
  </div>
)