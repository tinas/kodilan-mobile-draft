import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import { compose, position, flexbox, space, color, size, layout, borderRadius } from 'styled-system'

const Button = styled(TouchableOpacity)(compose(position, flexbox, space, color, size, layout, borderRadius))

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button
