import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { ImageBackground } from 'react-native';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(null);

  return (
    <View style={styles.container}>
      {showWebView ? (
        <View style={styles.webviewContainer}>
          {/* Header para fechar a WebView */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowWebView(false)}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
            <View style={styles.urlContainer}>
              <Text style={styles.urlText}>{currentUrl}</Text>
            </View>
          </View>

          {/* WebView para abrir a URL */}
          <WebView source={{ uri: currentUrl }} style={styles.webview} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text ></Text>
          <Text ></Text>
          <Text ></Text>
          <Text ></Text>
          <Text style={styles.welcomeText}>Bem-vindo ao Meu Site de Notícias!</Text>

          <View style={styles.cardContainer}>
            {/* Primeiro cartão - exemplo para um site */}
            <TouchableOpacity
              style={[styles.card, styles.card1]}
              onPress={() => { setCurrentUrl('https://www.msn.com'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/732/732080.png' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>MSN</Text>
                  <Text style={styles.cardDescription}>Últimas notícias internacionais</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Segundo cartão */}
            <TouchableOpacity
              style={[styles.card, styles.card2]}
              onPress={() => { setCurrentUrl('https://www.cnnbrasil.com.br'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/16574/16574306.png' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>CNN</Text>
                  <Text style={styles.cardDescription}>Notícias mundiais e atualizações</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Terceiro cartão */}
            <TouchableOpacity
              style={[styles.card, styles.card3]}
              onPress={() => { setCurrentUrl('https://www.terra.com.br'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/921/921490.png' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>Terra</Text>
                  <Text style={styles.cardDescription}>Notícias do Brasil e do Mundo</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Quarto cartão */}
            <TouchableOpacity
              style={[styles.card, styles.card4]}
              onPress={() => { setCurrentUrl('https://www.uol.com.br'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://logospng.org/download/uol/logo-uol-icon-1024.png' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>UOL</Text>
                  <Text style={styles.cardDescription}>Notícias, Esportes, Entretenimento</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Quinto cartão */}
            <TouchableOpacity
              style={[styles.card, styles.card5]}
              onPress={() => { setCurrentUrl('https://www.g1.com.br'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://play-lh.googleusercontent.com/jFIwbIofKnamJhU4l5eOeRvf7Zy-VF7avOsUcTmsji9xtKR_Dc6CT7hR1siQkHHBX5w' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>G1</Text>
                  <Text style={styles.cardDescription}>Notícias do Brasil e do Mundo</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Sexto cartão */}
            <TouchableOpacity
              style={[styles.card, styles.card6]}
              onPress={() => { setCurrentUrl('https://ge.globo.com/'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://s3.glbimg.com/v1/AUTH_378ee63fe83141e69caddd838034e850/static/preview-share-min.png' }} // Substitua pelo link ou caminho da sua imagem
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>GE</Text>
                  <Text style={styles.cardDescription}>Esportes em Geral</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.welcomeText}>Projeto TCC</Text>

          {/* ScrollView Horizontal para projetos de TCC */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            <TouchableOpacity
              style={[styles.card, styles.card7]}
              onPress={() => { setCurrentUrl('https://brunoaguiar1986.github.io/portifolio/'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3308/3308395.png' }}
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>Portifólio</Text>
                  <Text style={styles.cardDescription}>Acesse meu portifólio</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.card8]}
              onPress={() => { setCurrentUrl('https://github.com/brunoaguiar1986/portifolio'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://t2.tudocdn.net/510706?w=567&h=340' }}
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>Github</Text>
                  <Text style={styles.cardDescription}>Repositório</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.card9]}
              onPress={() => { setCurrentUrl('https://github.com/brunoaguiar1986/artigo/blob/main/artigo.pdf'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1051/1051326.png' }}
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>Artigo</Text>
                  <Text style={styles.cardDescription}>Acesse meu artigo</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, styles.card10]}
              onPress={() => { setCurrentUrl('https://github.com/brunoaguiar1986/manual/blob/main/manual.pdf'); setShowWebView(true); }}>
              <View style={styles.contentRow}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1051/1051326.png' }}
                  style={styles.iconImage}
                />
                <View>
                  <Text style={styles.cardTitle}>Manual</Text>
                  <Text style={styles.cardDescription}>Manual do usuário</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.welcomeText}>Rock</Text>

          {/* ScrollView Horizontal para projetos de TCC */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=_24pJQUj7zg'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://gerenciador.popload.com.br/wp-content/uploads/2019/11/011119_nirvana2.jpg' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=5abamRO41fE&list=RDEMuNoGZsKwOtmFzJbaW5DEFA&start_radio=1'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://rocknbold.com/wp-content/uploads/2021/08/SLIPKNOT-METALSUCKS.jpg' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=hTWKbfoikeg&list=RDEMDz952MrmDXLULMlo7SEXUw&start_radio=1'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyjZ9uGcydrsO8NA473usFIpzjVPAjtpb2hQ&s' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=SBjQ9tuuTJQ&list=RDEMx2SPzeaRXiOzpOe0SxPVJA&start_radio=1'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062013/foo_fighters.png?itok=gPXJLdzM' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=isCh4kCeNYU&list=RDQM9eVvrayUZPA&start_radio=1'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/02/Color-Guns-N%E2%80%99-Roses-Logo.jpg' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=bx1Bh8ZvH84&list=PLMEZyDHJojxPndMRFPzCZ1T7RgzlHWBUb'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1pBSqVPxsAZ5ngOiRlVGLY1wpFmdXxYJYg&s' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=CSvFpBOe8eY&list=PLSKnqXUHTaSdXuK8Z2d-hXLFtJbRZwPtJ'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-best-seller-logo-music-soad-system-of-a-down-widodo-ganteng.jpg' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardRock}
              onPress={() => { setCurrentUrl('https://www.youtube.com/watch?v=WM8bTdBs-cw&list=PLt04BbU3ELLD6Tq9HKpPJCeh6ZK7sB9p5'); setShowWebView(true); }}
            >
              <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cKzSYetKLlRlnvCHOFOAwmDREDm6a7Gh-Q&s' }} // Substitua pelo link da sua imagem
                style={{ width: '100%', height: '100%' }} // Cobre toda a área do card
                resizeMode="cover" // Garante que a imagem cubra todo o espaço
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.cardTitle}></Text>
                  <Text style={styles.cardDescription}></Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
  },
  contentContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  card1: {
    backgroundColor: 'orange',
  },
  card2: {
    backgroundColor: '#FF6347',
  },
  card3: {
    backgroundColor: '#4169E1',
  },
  card4: {
    backgroundColor: '#87CEEB',
  },
  card5: {
    backgroundColor: '#B22222',
  },
  card6: {
    backgroundColor: '#008000',
  },
  card7: {
    backgroundColor: 'gray',
  },
  card8: {
    backgroundColor: '#4682B4',
  },
  card9: {
    backgroundColor: '#20B2AA',
  },
  card10: {
    backgroundColor: '#8FBC8F',
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  cardDescription: {
    fontSize: 9,
    color: 'white',
    fontWeight: 'bold',
  },
  webviewContainer: {
    flex: 1,
    width: '100%',
  },
  webview: {
    flex: 1,
    marginTop: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 10,
    paddingHorizontal: 15,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 15,
  },
  urlContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  urlText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.8,
  },

  contentRow: {
    flexDirection: 'row', // Alinha a imagem e o texto em linha
    alignItems: 'center', // Centraliza verticalmente
  },
  iconImage: {
    width: 30, // Largura da imagem
    height: 30, // Altura da imagem
    marginRight: 10, // Espaço entre a imagem e o texto
    borderRadius: 7,
  },
  horizontalScrollView: {
    marginTop: 10,
    paddingLeft: 5,
  },
  card7: {
    backgroundColor: 'gray',
    width: 180, // Definido uma largura maior para caber no scroll horizontal
    marginRight: 10, // Espaço entre os cartões
    borderRadius: 11,
  },
  card8: {
    backgroundColor: '#4682B4',
    width: 180,
    marginRight: 10,

  },
  card9: {
    backgroundColor: '#20B2AA',
    width: 180,
    marginRight: 10,
  },
  card10: {
    backgroundColor: '#8FBC8F',
    width: 180,
    marginRight: 10,
  },
  cardRock: {
    width: 120, // Define a largura
    height: 120, // Define a altura igual à largura para manter o formato circular
    borderRadius: 60, // Metade do valor de width/height para criar um círculo
    marginRight: 10,
    overflow: 'hidden', // Garante que o conteúdo da imagem seja cortado nas bordas arredondadas
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    alignItems: 'center', // Centraliza horizontalmente o conteúdo
  },

});
