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
    'Our first and last love is??? self-love.',
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
    'Our life has 4 meanings??? Loving, Suffering, Fighting and Winning. Love a lot, suffer a little, fight a lot and always win!',
    'Nothing is by chance... Believe in your dreams and your potentials... In life everything is overcome...',
    "Believe in miracles, but don't depend on them.",
    'You will always be your best company!',
    'Perform the obvious, consider unlikely and conquer the impossible.',
  ];

  let frases = [
    'A vida trar?? coisas boas se voc?? tiver paci??ncia.',
     'Mostre amor e alegria em todas as oportunidades e ver?? que a paz nasce dentro de voc??.',
     'N??o compense com raiva o que lhe falta em raz??o.',
     'Defeitos e virtudes s??o apenas dois lados da mesma moeda.',
     'A mais alta de todas as torres come??a no ch??o.',
     "Voc?? n??o precisa ser forte. Voc?? precisa ser flex??vel.",
     'Todos os dias organize seu cabelo, por que n??o fazer o mesmo com seu cora????o?',
     'Existem tr??s coisas que nunca voltam; a flecha lan??ada, a palavra dita e a oportunidade perdida.',
     'A juventude n??o ?? uma fase da vida, ?? um estado de esp??rito.',
     'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
     'D?? total aten????o ao treinamento de seus filhos, especialmente com bons exemplos de sua pr??pria vida.',
     'Siga os bons e aprenda com eles.',
     'N??o importa qu??o grande seja a montanha, ela n??o pode bloquear o sol.',
     'Bom senso vale mais que muito conhecimento.',
     'Quem quer colher rosas deve estar preparado para enfrentar espinhos.',
     'S??o nossos amigos que nos ensinam as li????es mais valiosas.',
     'Aquele que se importa com os sentimentos dos outros n??o ?? tolo.',
     'A adversidade ?? um espelho que reflete o verdadeiro eu.',
     "Lamentar o que n??o temos ?? desperdi??ar o que j?? temos.",
     'Uma bela flor ?? incompleta sem suas folhas.',
     'Sem o fogo do entusiasmo, n??o h?? calor da vit??ria.',
     'O riso ?? a dist??ncia mais curta entre duas pessoas.',
     'Os defeitos s??o mais fortes quando o amor ?? fraco.',
     'Amizade e Amor s??o coisas que se juntam num piscar de olhos.',
     'Surpreender e ser surpreendido ?? o segredo do amor.',
     'Fa??a pequenas coisas hoje e coisas maiores ser??o confiadas a voc?? amanh??.',
     'Paci??ncia na adversidade ?? um sinal de um cora????o sens??vel.',
     'A sorte favorece a mente bem preparada.',
     'Sua vis??o ficar?? mais clara somente quando voc?? puder olhar para dentro do seu cora????o.',
     'Quem olha para fora sonha; quem olha para dentro acorda.',
     'As pessoas v??o esquecer o que voc?? disse e o que voc?? fez... mas nunca esquecer??o como foi.',
     'Espere pelo mais s??bio dos conselhos: o tempo.',
     'Todas as coisas s??o dif??ceis antes de se tornarem f??ceis.',
     "Se te sentes sozinho ?? porque constru??ste muros em vez de pontes.",
     'Vencer ?? 90% suor e 10% engenhosidade.',
     'O amor est?? sempre mais perto do que voc?? pensa.',
     'Voc?? ?? do tamanho do seu sonho.',
     'Pare de procurar para sempre; a felicidade est?? bem aqui ao seu lado.',
     'O conhecimento ?? a ??nica virtude e a ignor??ncia ?? o ??nico v??cio.',
     'Nosso primeiro e ??ltimo amor ??... o amor-pr??prio.',
     'Deixe de lado as preocupa????es e seja feliz.',
     'A vontade do povo ?? a melhor das leis.',
     'Somos o que pensamos.',
     'A maior barreira para o sucesso ?? o medo do fracasso.',
     'O pessimista v?? a dificuldade em cada oportunidade; O otimista v?? oportunidade em cada dificuldade.',
     "Muitas das maiores conquistas do mundo foram feitas por homens cansados e desanimados que continuaram seu trabalho.",
     'O fracasso ?? apenas uma oportunidade de recome??ar com mais experi??ncia.',
     'Coragem ?? resist??ncia ao medo, dom??nio do medo, n??o a aus??ncia do medo.',
     'O verdadeiro homem mede sua for??a quando encontra o obst??culo.',
     'Quem quer vencer um obst??culo deve armar-se com a for??a do le??o e a prud??ncia da serpente.',
     'A adversidade desperta em n??s habilidades que, em circunst??ncias favor??veis, teriam permanecido adormecidas.',
     'Motiva????o n??o ?? sin??nimo de transforma????o, mas um passo em dire????o a ela.',
     'O que empobrece o ser humano n??o ?? a falta de dinheiro, mas a falta de f??, motiva????o e criatividade.',
     'A inspira????o vem dos outros. A motiva????o vem de dentro de n??s.',
     "N??o acredite mais em pessoas especiais, mas sim em momentos especiais com pessoas normais.",
     'Nossa vida tem 4 sentidos??? Amar, Sofrer, Lutar e Vencer. Ame muito, sofra um pouco, lute muito e ven??a sempre!',
     'Nada ?? por acaso... Acredite nos seus sonhos e nas suas potencialidades... Na vida tudo se supera...',
     "Acredite em milagres, mas n??o dependa deles.",
     'Voc?? sempre ser?? sua melhor companhia!',
     'Realize o ??bvio, considere o improv??vel e conquiste o imposs??vel.',
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
