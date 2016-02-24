const React = require('react-native');

const {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} = React;

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();
const styles = require('./styles');

const Cards = React.createClass({
  render(){
    var base64Icon = 'http://unperiodico.unal.edu.co/uploads/pics/UNPeriodico191-150806-02_03.jpg';
    var action = (<Text>() N.° 0</Text>);
    var menu = (
       <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
        >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        {/* Here the magic happens*/}
          <View style={theme.cardStyle}>
            <Image source={{uri : base64Icon}} style={theme.cardImageStyle}/>
            <Text style={theme.cardTitleStyle}>El reto es educar para la paz y con la paz</Text>
            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={{
                padding : 15,
              }}
              >
              <Text style={[theme.cardContentStyle, {padding:0}]}>
Nada hacemos con graduar estudiantes para quienes da lo mismo que mueran decenas de personas cada día, en la más cruenta, la más absurda, la más aberrante de las violaciones a los derechos humanos, el enfrentamiento armado.

Si bien toda buena universidad alberga reservas en torno a mezclar las cuestiones académicas con las morales, también es cierto que pretender darle una orientación ética a la educación puede ser, con demasiada facilidad, una trampa para el adoctrinamiento en determinado credo o en determinada ideología.

Ese es un riesgo siempre en la enseñanza: pretender pasar como visión de mundo lo que no es más que la opinión de unos cuantos o incluso de la mayoría. Pero el relativismo axiológico no puede ser llevado al extremo de que nos vuelva sordos ante el clamor de las víctimas de Siria, Irak, Afganistán, Colombia, Sudán, Somalia y Yemen.

No puede ser llevado al extremo de que poco o nada nos importe que la gran mayoría de las muertes de guerra las sufran los civiles inocentes y no los ejércitos que deciden pelear.

No puede ser llevado al extremo de que nos resulte un hecho curioso de la ciencia moderna que existan 23.000 ojivas nucleares aguardando un descuido o una locura, en los bodegones de las potencias militares.

No puede ser llevado al extremo de que nos dé lo mismo que haya en el mundo más de 640 millones de armas pequeñas y livianas, cuyas tres cuartas partes se encuentran en manos de civiles, y que fluyan libres a través de las fronteras.

No puede ser llevado al extremo de que seamos indiferentes, o cómplices silenciosos, cuando se están utilizando armas químicas para matar indiscriminadamente a víctimas inocentes. El poder de las armas convencionales ha probado ser mucho más letal que el de las nucleares.

¿Quién dijo que matar a miles de un golpe es peor que matar a miles poco a poco todos los días? No importa cuán objetiva pretenda ser nuestra educación, no puede ser tan objetiva como para que permanezca impasible ante este nivel de violencia.

Si las universidades, las escuelas y los colegios fallan en transmitir la elemental preocupación por la paz, la educación fracasa como instrumento de cambio, como vía para sanar los dolores de la humanidad.

Educar para la paz y con la paz quiere decir reconocer todas estas cosas, quiere decir además construir en las aulas el mundo que queremos ver en las calles. Muy a menudo hay un afán competitivo y violento en nuestras escuelas, pues se les permite a los estudiantes una guerra de palabras, que es el germen de la guerra con las armas; se les enseñan valores patrióticos que rayan en la xenofobia y hay un énfasis continuo en retratar al otro como el enemigo a vencer. Además se les educa en un mundo dividido por fronteras y nacionalidades, cuyo avance histórico solo se mide en triunfos bélicos y en campañas militares.

En ningún lugar es más claro esto que en Latinoamérica, donde los estudiantes son más capaces de narrar las glorias de caudillos tropicales que la vida de los luchadores por la paz mundial. Esto es preocupante porque si hacemos de la paz una asignación extracurricular, acabará por ser una actitud extracurricular, una rareza de los bohemios y los soñadores y no la misión de los académicos y los doctores.

Nuestros jóvenes necesitan comprender el valor de su libertad y la de sus vecinos, deben entender cuán inmensa es su capacidad de transformar el curso de las cosas, deben aceptar, aunque les cueste, que son responsables por el ejercicio de cualquier derecho o prerrogativa que les haya sido concedida y que en el ejercicio de esa libertad, pueden cambiar el mundo para bien o para mal.

Encontrar un equilibrio entre educación y libertad es quizá uno de los más antiguos dilemas de la enseñanza, es la tensión entre el adiestramiento y la ilustración, entre la memoria y la imaginación, que se mueve como un péndulo en las diversas etapas de la historia pedagógica.

Una educación para la paz solo puede ser una educación para la libertad, una educación creativa en el más amplio sentido de la palabra.

Los regímenes totalitarios han sido siempre excelentes adiestradores, pero nunca han educado para la paz.

En un mundo en el que las generaciones más jóvenes dominan herramientas que nosotros ni siquiera alcanzamos a comprender, donde se produce más conocimiento en cinco años que en toda la historia de la humanidad y donde un reproductor de música de 10 centímetros contiene tecnología más compleja que la que puso al hombre en la luna, nuestros estudiantes necesitan dirección más que información, discernimiento más que adiestramiento, necesitan comprender su capacidad de transformación y ejercerla.

Un mundo escondido

No hay que tenerle miedo a la libertad, a ese galope creativo que destruye a su paso los dogmas y los prejuicios, no hay que tenerle miedo, aunque demuela las paredes del pensamiento antiguo y revuelva el polvo de las tradiciones que han permanecido intocables durante siglos.

Un mundo mejor no está escondido en los archivos, no está en el acervo de costumbres  que en el pasado nos han llevado una y otra vez al borde del abismo. Un mundo mejor vendrá de la imaginación, vendrá del germen sempervirente del ingenio humano.

Hay que confiar en ese germen, poner en él toda la esperanza que hemos rescatado de las fauces de la frustración, creer que el futuro es nuestra más conmovedora oportunidad y que depende enteramente de la libertad que les demos a nuestros pueblos y a nuestros estudiantes para rectificar el mundo.

Un tema que me resta por mencionar es la imperiosa necesidad de enseñar en nuestros currículos la importancia de la democracia. Antes que colombianos o panameños, que japoneses o indios, que sudafricanos o congoleses, que alemanes o ingleses, nuestros estudiantes deben ser ciudadanos.

Si hemos de forjar estudiantes ciudadanos, si hemos de crear una verdadera conciencia política en nuestra sociedad, hay que empezar por construir una cultura de democracia y pedagogía.

Hay que empezar por enseñarles a nuestros jóvenes el valor de la negociación, que no es otra cosa más que el camino de la democracia. Hay que empezar por enseñarles aquello que alguna vez dijera Jorge de Bravo, el más grande poeta de mi pueblo, que la paz no es una medalla, es una tierra esclavizada y tenemos que ir a libertarla, todos los días, a todas horas, en cada lección y en cada asignatura.

Siempre he creído que la inmensa mayoría de los conflictos que vive la humanidad pueden y deben ser resueltos mediante la negociación y la diplomacia, y que el uso de la fuerza debe ser el último recurso.

Hay quienes consideran que las negociaciones de paz son una expresión de ingenuidad, que no hay acuerdo posible con los agresores y que la única salida viable es apostarle al exterminio de las fuerzas enemigas. Hay quienes creen que es un error extender la mano a grupos que han incumplido acuerdos alcanzados en el pasado y que un cese al fuego solo es deseable bajo ciertas condiciones.

Entiendo su posición, su temor a transar con bandos que durante décadas han teñido de luto a un país entero; y entiendo que es difícil vislumbrar un puente que acepte dos posiciones tan opuestas. No son los primeros y probablemente no serán los últimos en sentirse de esa manera.

Todo conflicto armado que ha sido resuelto a través de la negociación y la diplomacia se encontró en algún momento donde se encuentra hoy Colombia, vacilando entre el respaldo y el recelo.

La paz es preferible a cualquier alternativa. Lo digo desde la experiencia, las heridas del pueblo colombiano no difieren tanto de las que sufría Nicaragua o El Salvador en la década de los 80.

Las dificultades para la firma de un acuerdo de paz duradero no son tan distintas de las que enfrentamos en el proceso centroamericano. En toda negociación habrá siempre diferencias y no pretendo ignorar las particularidades del conflicto colombiano, solo quiero insistir en que hay lecciones que no deberíamos tener que aprender cada vez que nos sentamos a dialogar y que pueden alentar la negociación de la paz en Colombia.

El cese al fuego como objetivo máximo e indiscutible a lo largo de todo el proceso, sí es posible.

Resultará tautológico para algunos que insista en que el cese al fuego es el objetivo máximo de una negociación de paz, pero en la práctica muchos actores anteponen otros intereses.

Cada vez que nos levantamos de la mesa, porque la compensación no es suficiente, porque nos indigna la amnistía a los perpetradores o porque objetamos que se otorgue o no participación política a los grupos subversivos, estamos diciendo que esos objetivos son más importantes que el cese al fuego y que la guerra es preferible a ciertas versiones de la paz.

Algunos argumentan que se trata de un asunto de confianza. Si no se alcanzan ciertas condiciones, no hay garantía de que los actores abandonen sus prácticas agresivas. Esas discusiones ya las tuvimos en Centroamérica, las tuvieron en Irlanda del Norte, en Sudáfrica, en Bosnia y Herzegovina. También las han tenido las infértiles negociaciones de paz en Medio Oriente, donde siempre han primado otros objetivos por encima del silencio de las armas.

La diferencia está en la inamovilidad del objetivo, la firmeza en insistir que el fin de todas las hostilidades es más importante que cualquier otra victoria.

El proceso de negociación no es otra cosa más que un esfuerzo por reducir los costos de la paz y aumentar los del conflicto, es decir hacer más fácil un acuerdo y más difícil la prolongación del statu quo.

El cese al fuego es la forma más eficiente de alterar esa ecuación y elevar el costo del fracaso. En la medida en que este no exista como precondición para la negociación, el proceso de paz sufre siempre el riesgo de ser secuestrado por episodios de violencia que disuaden a las partes, enfurecen a la opinión pública y minan la confianza de la comunidad internacional.

Apoyo internacional

Las cinco repúblicas centroamericanas negociamos el plan de paz en contra de la voluntad de las dos superpotencias de la guerra fría, los Estados Unidos y la Unión Soviética, Ronald Reagan y Mijaíl Gorbachov, quienes siempre se opusieron a una salida diplomática al conflicto.

Dudo que algún actor internacional se atreva ahora a boicotear el proceso de paz que se lleva en Colombia. Es más, se requerirá de la cooperación internacional para cubrir los costos de implementación de un eventual acuerdo.

Pero el apoyo de la comunidad internacional está condicionado a que las partes puedan demostrar que son capaces de dejar de agredirse. Un cese al fuego es fundamental para inclinar la balanza a favor de una paz duradera. Es claro que no hay una única respuesta para alcanzarla. En esto, como en cualquier empresa humana, carecemos de recetas infalibles.

La paz es un impulso dinámico, vivo, y por eso es inconclusa y progresiva. No es obra de héroes ni titanes, sino de hombres y mujeres imperfectos luchando en tiempos difíciles por un resultado incierto.

Para arrojar luz sobre el conflicto colombiano se requiere voluntad para hacer concesiones, esto implica la capacidad de deponer posturas, modificar posiciones y ser flexible en los objetivos intermedios a fin de alcanzar el objetivo último.

Hacer concesiones puede ser doloroso y políticamente problemático. La opinión pública tiende a estar en contra de ceder terreno frente al adversario. Con demasiada frecuencia las negociaciones se plantean como un juego de suma cero, en el que una parte gana y otra pierde la totalidad del botín.

En la realidad, un proceso de paz solo puede ser exitoso en la medida en que ambos bandos ganen y pierdan. La única paz posible es con concesiones. Si queremos respaldar el proceso de negociación, debemos respaldar también las decisiones que adoptan y las concesiones que acuerdan los representantes de ambas partes. Esto requiere de mucha madurez y sobriedad de carácter, de la capacidad de abandonar una idea inalcanzable a cambio de una realidad factible, y de un cambio de paradigma.

En lugar de enfocarnos en lo máximo que quisiéramos obtener, debemos hacerlo en lo mínimo que podemos aceptar.

Quizás la concesión más difícil sea la relativa al balance entre la justicia y el perdón, ambos valores resuenan en el diapasón de nuestro espíritu, han sido grabados en monumentos y frontispicios, en constituciones y discursos, son fundamentales para la vida en sociedad.

Sin embargo, todo negociador sabe que un acuerdo implica un equilibrio entre el reconocimiento de los horrores cometidos, el señalamiento de los responsables y el riesgo de que el impulso por otorgar castigos se convierta en un obstáculo para lograr el fin de la guerra.

Por duro que parezca, una sociedad en guerra eventualmente debe elegir entre sancionar el pasado o habilitar el futuro. Siempre habrá quienes digan que la impunidad es incompatible con la paz, y llevan algo de razón.

Los acuerdos de paz que se han registrado en la historia combinan, en distintas proporciones, un grado de sanción con uno de amnistía. Cierto grado de perdón es intrínseco al proceso de negociación, por el solo hecho de que es irracional pedirle a un actor que acceda a condiciones que únicamente lo perjudican.

No quisiera que los esfuerzos de esta negociación que ha tomado años naufraguen ante una aspiración de castigo que con acuerdos o sin acuerdos de paz, difícilmente será satisfecha.

No hay nada más legítimo que la ira que ocasiona la muerte de inocentes, no hay nada más genuino que el dolor de cientos de miles de víctimas. Hay que encontrar una manera de honrar ese dolor, de responder a esa ira sin perder la oportunidad de la paz.

La paz, la libertad y la democracia son obras eternamente inconclusas, libros de tintas siempre frescas en los anales del tiempo. Si la educación no toma la pluma, si los miembros de la academia colombiana no empuñan el grafito, perderemos aún más páginas en garabatos violentos, en el galimatías inescrutable de la guerra del odio y el enfrentamiento, que ha llenado ya demasiados tomos de la historia de este pueblo bendito.

Es el reto de una mayor educación, pero es ante todo, el de una mejor educación, que le ponga corazón al pensamiento.

(*) Ponencia en el Auditorio Alfonso López Pumarejo de la UN, en el marco de la Escuela Internacional de Verano 2015 “Conectando a los mejores para la paz”, organizada por la Fundación Ceiba, el Ministerio de Educación y la Universidad Nacional de Colombia.
              </Text>
            </View>
            <View style={theme.cardMenuStyle}>{menu}</View>
            <View style={theme.cardActionStyle}>
              <Text>Pepito</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
});

module.exports = Cards;
