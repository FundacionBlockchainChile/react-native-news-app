import React, { useState } from 'react'
import { WebView } from 'react-native-webview'
import * as Progress from 'react-native-progress'

const WebPage = ({ route }) => {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setLoaded] = useState(false)

  const { url } = route.params

  return (
    <>
      {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color="red"
        />
      ) : null}
      <WebView
        source={{
          uri: url,
        }}
        onError={(event) =>
          alert(`Webview error: ${event.nativeEvent.description}`)
        }
        onMessage={(event) => {
          alert(event.nativeEvent.data)
        }}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
      />
    </>
  )
}

export default WebPage
