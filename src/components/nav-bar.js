import React from 'react'
import { StyleSheet, Image, Linking } from 'react-native'

import ActionSheet from 'react-native-actions-sheet'
import HTMLView from 'react-native-htmlview'

import Box from './box'
import Label from './label'
import Button from './button'
import Logo from './logo'
import { Megaphone, Info, Github } from './icons'

import theme from '../utils/theme'

const actionSheetRef = React.createRef()

const NavBar = ({ ...props }) => {
  return (
    <Box bg="background" {...props} borderBottomWidth={0.2} borderBottomColor="rgba(153, 153, 153, .5)">
      <Box px={16} py={8} flexDirection="row" justifyContent="space-between">
        <Logo fontSize={32} />
        <Box flexDirection="row">
          <Button>
            <Megaphone width={32} height={32} color={theme.colors.icon} />
          </Button>
          <Button
            pl={24}
            onPress={() => {
              actionSheetRef.current?.setModalVisible()
            }}
          >
            <Info width={32} height={32} color={theme.colors.icon} />
          </Button>
        </Box>
      </Box>
      <ActionSheet ref={actionSheetRef} gestureEnabled={true}>
        <Box alignItems="center" px={16}>
          <Logo mt={16} fontSize={30} />
          <Box mt={16}>
            <HTMLView value={htmlContent} stylesheet={styles} />
          </Box>
          <Label mt={16} fontSize={20} color="green">
            Katkıda bulunun!
          </Label>
          <Button
            width="100%"
            height={52}
            mt={8}
            py={8}
            px={26}
            borderRadius={8}
            backgroundColor="green"
            onPress={() => {
              Linking.openURL('https://github.com/kodilan-com').catch((err) => {
                console.error('Failed opening page because: ', err)
                alert('Failed to open page')
              })
            }}
          >
            <Github width={24} height={24} stroke={theme.colors.white} />
            <Label ml={16} fontSize={16} color="white" fontWeight="700">
              kodilan-com
            </Label>
          </Button>
          <Label mt={32} color="disable">
            kodilan.com açık kaynaklı bir girişimdir.
          </Label>
        </Box>
      </ActionSheet>
    </Box>
  )
}

const htmlContent = `<p><strong>Kodilan.com</strong> ilan yayınlama sitesidir. Başvurular ilgili firmaya direkt olarak yapılmakta olup <strong>Kodilan.com</strong>
üzerinden hiçbir veri gönderilmemektedir. Sitemizde yayınlanan ilanlar tamamen ücretsizdir ve ilan sahipleri
ile sitemizin hiçbir ilişkisi yoktur. Paylaşılan ilanlarda değişiklik yapma ve yayından kaldırma hakları
Kodilan'a aittir. Görüş ve önerileriniz için <strong>info@kodilan.com</strong> adresine e-posta gönderebilirsiniz.</p>`

const styles = StyleSheet.create({
  p: {
    color: theme.colors.disable,
    lineHeight: 30,
    textAlign: 'center'
  },

  strong: {
    color: theme.colors.green,
    fontWeight: '700'
  }
})

export default NavBar
