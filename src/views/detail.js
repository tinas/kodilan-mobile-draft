import React from 'react'
import { Alert, Linking, Platform, ScrollView, ToastAndroid } from 'react-native'
import HTMLView from 'react-native-htmlview'
import Clipboard from '@react-native-community/clipboard'

import Box from '../components/box'
import Label from '../components/label'
import Button from '../components/button'
import PositionTag from '../components/position-tag'
import Tag from '../components/tag'
import CompanyImage from '../components/company-image'

import { Management, Map } from '../components/icons'

import theme from '../utils/theme'
import { formatLocaleDate } from '../utils/date'

const DetailView = ({ route }) => {
  const post = route.params.item

  const applyEmail = async () => {
    try {
      await Linking.openURL(`mailto:${post.apply_email}`)
    } catch (e) {
      Alert.alert(
        'E-posta uygulaması bulunamadı',
        `${post.apply_email} adresine "${post.position} Başvurusu" başlığı ile e-posta gönderebilirsiniz. E-posta adresini kopyalamak için sayfanın altındaki bağlantılardan kopyalayabilirsiniz.`
      )
    }
  }

  const applyUrl = () => {
    Linking.openURL(post.apply_url)
  }

  return (
    <Box bg="background" flex={1}>
      <ScrollView
        style={{ paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Box flexDirection="row" mt={10}>
          <PositionTag type={post.type} />
          <Box flexDirection="row" ml="auto">
            <Label fontSize={10} color="placeholder">
              Son güncelleme:
            </Label>
            <Label color="green" ml={4} fontSize={10} fontWeight="700">
              {formatLocaleDate(post.updated_at)}
            </Label>
          </Box>
        </Box>
        <Label mt={16} fontSize={20} fontWeight="700" color="title">
          {post.position}
        </Label>
        <Box flexDirection="row" alignItems="center" mt={24}>
          <CompanyImage
            style={{ width: 70, height: 70, resizeMode: 'contain' }}
            uri={post.company.logo}
            width={70}
            height={70}
            company_slug={post.company.slug}
          />
          <Box ml={10}>
            <Box flexDirection="row" mt={-4}>
              <Management width={16} height={16} color={theme.colors.placeholder} />
              <Label ml={4} fontSize={12} fontWeight="700" color="green">
                {post.company.name.length > 23 ? post.company.name.substr(0, 21) + '...' : post.company.name}
              </Label>
            </Box>
            <Box flexDirection="row" alignItems="center" mt={8}>
              <Map width={16} height={16} color={theme.colors.placeholder} />
              <Label ml={4} fontSize={12} color="green">
                {post.location}
              </Label>
            </Box>
          </Box>
        </Box>
        <Box mt={16}>
          <Button backgroundColor="green" py={10} borderRadius={4}>
            <Label color="white" fontSize={16} fontWeight="700" onPress={applyEmail}>
              E-posta ile başvur
            </Label>
          </Button>
          <Button
            borderWidth={1}
            borderColor="green"
            backgroundColor="white"
            py={10}
            borderRadius={4}
            mt={10}
            onPress={applyUrl}
          >
            <Label color="green" fontSize={15} fontWeight="700">
              Site üzerinden başvur
            </Label>
          </Button>
        </Box>
        <Label mt={24} color="icon" fontSize={18} fontWeight="700">
          İlan detayı
        </Label>
        <Box mt={8}>
          <HTMLView value={post.description} />
        </Box>
        <Box mt={32}>
          {post.tags.length > 0 && (
            <Box>
              <Label color="placeholder" fontSize={12} fontWeight="700">
                Etiketler
              </Label>
              <Box flexDirection="row" flexWrap="wrap" mt={8} mb={-8}>
                {post.tags.map((item) => (
                  <Tag item={item} key={item.slug} mr={8} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <Box mt={16}>
          <Ticket title="Pozisyon" content={post.position} />
          <Ticket title="Lokasyon" content={post.location} />
          {post.apply_email && <Ticket title="E-posta" content={post.apply_email} />}
          {post.company.www && <Ticket title="Website" content={post.company.www} />}
          {post.company.twitter && <Ticket title="Twitter" content={post.company.twitter} />}
          {post.company.linkedin && <Ticket title="LinkedIn" content={post.company.linkedin} />}
        </Box>
      </ScrollView>
    </Box>
  )
}

const Ticket = ({ title, content, ...props }) => {
  const copyToClipboard = () => {
    Clipboard.setString(content)
    const infoText = `${title} panoya kopyalandı`
    Platform.OS == 'ios' ? Alert.alert('Bilgi', infoText) : ToastAndroid.show(infoText, ToastAndroid.SHORT)
  }

  return (
    <Button flexDirection="row" justifyContent="flex-start" mt={12} {...props} onLongPress={copyToClipboard}>
      <Label fontSize={10} color="placeholder">
        {title}:
      </Label>
      <Label color="green" ml={4} fontSize={10} fontWeight="700">
        {content}
      </Label>
    </Button>
  )
}

export default DetailView
