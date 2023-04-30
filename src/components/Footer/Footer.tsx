import React, { ReactElement } from 'react'
import styles from './Footer.module.css'
import Markdown from '@shared/Markdown'
import MarketStats from './MarketStats'
import BuildId from './BuildId'
import Links from './Links'
import Button from '@shared/atoms/Button'
import External from '@images/external.svg'
import { useMarketMetadata } from '@context/MarketMetadata'

export default function Footer(): ReactElement {
  const { siteContent } = useMarketMetadata()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>

      <div className={styles.grid}>
        <div className={styles.copyright} style={{textAlign:'center'}}>
          © {year} <Markdown text={siteContent?.copyright} />
          <Button
            style="text"
            size="small"
            href="https://github.com/VideoWiki/ocean-challenge"
            target="_blank"
          >
            VideoWiki <External className={styles.svg} />
          </Button>
        </div>
      </div>
    </footer>
  )
}
