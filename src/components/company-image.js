import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { SvgXml } from 'react-native-svg'

import Button from './button'

import { getSvgData } from '../services/company-image-service'

const emptyCompanyLogo = 'https://kodilan.com/img/empty-company-logo.8437254b.png'

const CompanyImage = ({ uri, width, height, style, company_slug }) => {
  const [svg, setSvg] = useState()
  const [image, setImage] = useState(emptyCompanyLogo)

  useEffect(async () => {
    if (uri.includes('.svg')) {
      try {
        const response = await getSvgData(uri)
        setSvg(response.data)
      } catch (e) {
        setSvg(null)
      }
    } else {
      setImage(uri)
    }
  }, [uri])

  const handleImageError = () => {
    setImage(emptyCompanyLogo)
  }

  return (
    <Button>
      {uri.includes('.svg') && svg ? (
        <SvgXml style={style} width={width} height={height} xml={svg} />
      ) : (
        <Image style={[style, { borderRadius: 4 }]} source={{ uri: image }} onError={handleImageError} />
      )}
    </Button>
  )
}

export default CompanyImage
