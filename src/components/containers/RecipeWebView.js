import React, { useLayoutEffect } from 'react'
import WebView from 'react-native-webview'
import ShareIcon from '../icons/ShareIcon'

const RecipeWebView = ({ navigation, route }) => {
  const { url } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareIcon route={route} />
    })
  }, [navigation])

  return <WebView source={{ uri: url }} />
}

export default RecipeWebView
