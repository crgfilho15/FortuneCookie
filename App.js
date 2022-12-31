import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function App() {
    let sentences = [
    'Life will bring good things if you have patience.',
    'Show love and joy at every opportunity and you will see that peace is born within you.',
    'Do not make up in anger what you lack in reason.',
    'Defects and virtues are just two sides of the same coin.',
    'The tallest of all towers starts on the ground.',
    "You don't have to be strong. You have to be flexible.",
    'Every day organize your hair, why not do the same with your heart?',
    'There are three things that never come back; the arrow released, the word spoken and the opportunity lost.',
    'Youth is not a time of life, it is a state of mind.',
    'We can choose what we sow, but we are obliged to reap what we sow.',
    'Give full attention to the training of your children, especially with good examples from your own life.',
    'Follow the good ones and learn from them.',
    'No matter how big the mountain is, it cannot block out the sun.',
    'Common sense is worth more than a lot of knowledge.',
    'Whoever wants to pick roses must be prepared to endure thorns.',
    'It is our friends who teach us the most valuable lessons.',
    'He who cares for the feelings of others is not a fool.',
    'Adversity is a mirror that reflects the true self.',
    "To regret what we don't have is to waste what we already have.",
    'A beautiful flower is incomplete without its leaves.',
    'Without the fire of enthusiasm, there is no heat of victory.',
    'Laughter is the shortest distance between two people.',
    'Defects are strongest when love is weak.',
    'Friendship and Love are things that come together in the blink of an eye.',
    'Surprising and being surprised is the secret of love.',
    'Do small things today and bigger things will be entrusted to you tomorrow.',
    'Patience in adversity is a sign of a sensitive heart.',
    'Luck favors the well-prepared mind.',
    'Your vision will become clearer only when you can look into your heart.',
    'Who looks outside dreams; whoever looks inside wakes up.',
    'People will forget what you said and what you did... but they will never forget how it felt.',
    'Wait for the wisest of advice: time.',
    'All things are difficult before they become easy.',
    "If you feel lonely it's because you built walls instead of bridges.",
    'Winning is 90 percent sweat and 10 percent ingenuity.',
    'Love is always closer than you think.',
    'You are the size of your dream.',
    'Stop searching forever; happiness is right here by your side.',
    'Knowledge is the only virtue and ignorance is the only vice.',
    'Our first and last love is… self-love.',
    'Let go of worries and be happy.',
    'The will of the people is the best of laws.',
    'We are what we think.',
    'The biggest barrier to success is fear of failure.',
    'The pessimist sees the difficulty in every opportunity; The optimist sees the opportunity in every difficulty.',
    "Many of the world's greatest achievements were made by weary, discouraged men who continued their work.",
    'Failure is just an opportunity to start over with more experience.',
    'Courage is resistance to fear, mastery of fear, not the absence of fear.',
    'The real man measures his strength when he meets the obstacle.',
    'Anyone who wants to overcome an obstacle must arm himself with the strength of the lion and the prudence of the serpent.',
    'Adversity awakens abilities in us that, under favorable circumstances, would have remained dormant.',
    'Motivation is not synonymous with transformation, but a step towards it.',
    'What impoverishes the human being is not the lack of money, but the lack of faith, motivation and creativity.',
    'Inspiration comes from others. Motivation comes from within us.',
    "Don't believe in special people anymore, but in special moments with normal people.",
    'Our life has 4 meanings… Loving, Suffering, Fighting and Winning. Love a lot, suffer a little, fight a lot and always win!',
    'Nothing is by chance... Believe in your dreams and your potentials... In life everything is overcome...',
    "Believe in miracles, but don't depend on them.",
    'You will always be your best company!',
    'Perform the obvious, consider unlikely and conquer the impossible.',
  ];

  let frases = [
    'A vida trará coisas boas se você tiver paciência.',
     'Mostre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.',
     'Não compense com raiva o que lhe falta em razão.',
     'Defeitos e virtudes são apenas dois lados da mesma moeda.',
     'A mais alta de todas as torres começa no chão.',
     "Você não precisa ser forte. Você precisa ser flexível.",
     'Todos os dias organize seu cabelo, por que não fazer o mesmo com seu coração?',
     'Existem três coisas que nunca voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
     'A juventude não é uma fase da vida, é um estado de espírito.',
     'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
     'Dê total atenção ao treinamento de seus filhos, especialmente com bons exemplos de sua própria vida.',
     'Siga os bons e aprenda com eles.',
     'Não importa quão grande seja a montanha, ela não pode bloquear o sol.',
     'Bom senso vale mais que muito conhecimento.',
     'Quem quer colher rosas deve estar preparado para enfrentar espinhos.',
     'São nossos amigos que nos ensinam as lições mais valiosas.',
     'Aquele que se importa com os sentimentos dos outros não é tolo.',
     'A adversidade é um espelho que reflete o verdadeiro eu.',
     "Lamentar o que não temos é desperdiçar o que já temos.",
     'Uma bela flor é incompleta sem suas folhas.',
     'Sem o fogo do entusiasmo, não há calor da vitória.',
     'O riso é a distância mais curta entre duas pessoas.',
     'Os defeitos são mais fortes quando o amor é fraco.',
     'Amizade e Amor são coisas que se juntam num piscar de olhos.',
     'Surpreender e ser surpreendido é o segredo do amor.',
     'Faça pequenas coisas hoje e coisas maiores serão confiadas a você amanhã.',
     'Paciência na adversidade é um sinal de um coração sensível.',
     'A sorte favorece a mente bem preparada.',
     'Sua visão ficará mais clara somente quando você puder olhar para dentro do seu coração.',
     'Quem olha para fora sonha; quem olha para dentro acorda.',
     'As pessoas vão esquecer o que você disse e o que você fez... mas nunca esquecerão como foi.',
     'Espere pelo mais sábio dos conselhos: o tempo.',
     'Todas as coisas são difíceis antes de se tornarem fáceis.',
     "Se te sentes sozinho é porque construíste muros em vez de pontes.",
     'Vencer é 90% suor e 10% engenhosidade.',
     'O amor está sempre mais perto do que você pensa.',
     'Você é do tamanho do seu sonho.',
     'Pare de procurar para sempre; a felicidade está bem aqui ao seu lado.',
     'O conhecimento é a única virtude e a ignorância é o único vício.',
     'Nosso primeiro e último amor é... o amor-próprio.',
     'Deixe de lado as preocupações e seja feliz.',
     'A vontade do povo é a melhor das leis.',
     'Somos o que pensamos.',
     'A maior barreira para o sucesso é o medo do fracasso.',
     'O pessimista vê a dificuldade em cada oportunidade; O otimista vê oportunidade em cada dificuldade.',
     "Muitas das maiores conquistas do mundo foram feitas por homens cansados e desanimados que continuaram seu trabalho.",
     'O fracasso é apenas uma oportunidade de recomeçar com mais experiência.',
     'Coragem é resistência ao medo, domínio do medo, não a ausência do medo.',
     'O verdadeiro homem mede sua força quando encontra o obstáculo.',
     'Quem quer vencer um obstáculo deve armar-se com a força do leão e a prudência da serpente.',
     'A adversidade desperta em nós habilidades que, em circunstâncias favoráveis, teriam permanecido adormecidas.',
     'Motivação não é sinônimo de transformação, mas um passo em direção a ela.',
     'O que empobrece o ser humano não é a falta de dinheiro, mas a falta de fé, motivação e criatividade.',
     'A inspiração vem dos outros. A motivação vem de dentro de nós.',
     "Não acredite mais em pessoas especiais, mas sim em momentos especiais com pessoas normais.",
     'Nossa vida tem 4 sentidos… Amar, Sofrer, Lutar e Vencer. Ame muito, sofra um pouco, lute muito e vença sempre!',
     'Nada é por acaso... Acredite nos seus sonhos e nas suas potencialidades... Na vida tudo se supera...',
     "Acredite em milagres, mas não dependa deles.",
     'Você sempre será sua melhor companhia!',
     'Realize o óbvio, considere o improvável e conquiste o impossível.',
   ];

  const [img, setImg] = useState(require('./src/Closed_Cookie.png'));
  const [sentence, setSentence] = useState('');
  const [frase, setFrase] = useState('');

  function openCookie() {
    if(sentence == '') {
      let randomNumber = Math.floor(Math.random() * sentences.length);
      setSentence('"' + sentences[randomNumber] + '"');
      setFrase('"' + frases[randomNumber] + '"');
      setImg(require('./src/Opened_Cookie.png'));
    } else {
      alert('The cookie is already open, choose another cookie!')
    }
  }

  function reloadCookie() {
    setImg(require('./src/Closed_Cookie.png'));
    setSentence('');
    setFrase('');
  }

  return (
    <View style={styles.container}>

      <Text style={[styles.sentence, {fontSize: 30}]}>Welcome to 2023</Text>

      <Image style={styles.image} source={img}/>

      <Text style={styles.sentence}>{sentence}</Text>
      <Text style={[styles.sentence, {marginTop: 0}]}>{frase}</Text>

      <TouchableOpacity style={styles.button} onPress={openCookie}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Open the Cookie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#121212'}]} onPress={reloadCookie}>
        <View style={styles.buttonArea}>
          <Text style={[styles.buttonText, {color: '#121212'}]}>Choose Another Cookie</Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.sentence, {fontSize: 15}]}>
      Developed by Carlos Roberto - {''}
      <Text style={styles.hyperlinkStyle} onPress={() => { Linking.openURL('https://github.com/crgfilho15') }}> @crgfilho15</Text>

      </Text>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    // height: '20%',
    resizeMode: 'contain',
  },
  sentence: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#DD7B22',
    borderWidth: 2,
    borderRadius: 25,
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#DD7B22',
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});
