import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Image } from 'react-native'
import { SvgXml } from 'react-native-svg'

import Button from './button'

import { getSvgData } from '../services/company-image-service'

import { QUERY_TYPE } from '../utils/constants'

const emptyCompanyLogo = 'https://kodilan.com/img/empty-company-logo.8437254b.png'

const CompanyImage = ({ uri, width, height, style, companyName, companySlug, touchable = false }) => {
  const [svg, setSvg] = React.useState()
  const [image, setImage] = React.useState(emptyCompanyLogo)

  React.useEffect(async () => {
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

  const navigation = useNavigation()

  const handlePress = () => {
    if (!touchable) return

    navigation.navigate('SearchResult', {
      company: { name: companyName, slug: companySlug },
      type: QUERY_TYPE.COMPANY
    })
  }

  return (
    <Button onPress={handlePress}>
      {uri.includes('.svg') && svg ? (
        <SvgXml style={style} width={width} height={height} xml={svg} />
      ) : (
        <Image style={[style, { borderRadius: 4 }]} source={{ uri: image }} onError={handleImageError} />
      )}
    </Button>
  )
}

export default CompanyImage
