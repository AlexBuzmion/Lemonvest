import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function Nunito(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Nunito' }]} />;
}

