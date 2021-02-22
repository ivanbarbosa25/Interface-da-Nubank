import React, {Component }from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

class App extends Component{
  render(){
    return(
    <View style={styles.container}>
       <View style={styles.header}>
       <Text style={{color: '#fff',fontSize: 30, marginRight: 80,fontWeight: 'bold',marginLeft: 1}}>Olá, Ivandro</Text>
            <TouchableOpacity
               style={styles.btnolho}
            >
                 <Image
                 style={styles.olho}
                 source={require('./src/img/olho.png')}
                 />
            </TouchableOpacity >
            <TouchableOpacity
            style={styles.btnconf}
            >
                 <Image
                 style={styles.conf}
                 source={require('./src/img/conf.png')}
                 />
            </TouchableOpacity>
       </View>


     <ScrollView 
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      >
      <View style={styles.corpo}>
        
         <TouchableOpacity>
        <View  style={styles.credito}> 
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
        <Image
                 style={{height: 55, width: 70}}
                 source={require('./src/img/cred.png')}
                 />
         <Text style={{color: 'grey', fontSize: 15}}>Cartão de Crédito</Text>
        </View>

        <Text style={{color: 'grey', fontSize: 15, marginLeft: 20}}>Fatura Atual</Text>
        <Text style={{color: '#45aaf2', fontSize: 25,fontWeight:'bold', marginLeft: 20, marginTop: 5}}>R$  10.300,00</Text>

        <View style={{flexDirection: 'row',alignItems: 'center'}}>
           <Text style={{color: 'black', fontSize: 13, marginLeft: 21, marginTop: 10,fontWeight:'bold'}}>Limite diponível</Text>
           <Text style={{color: 'green', fontSize: 13, marginTop: 10,fontWeight:'bold', marginLeft: 10}}>R$ 5.600.650</Text>
        </View>
        </View>
        </TouchableOpacity>
              

        <TouchableOpacity>
        <View  style={styles.conta}> 
              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <Image
                        style={{height: 55, width: 70}}
                        source={require('./src/img/conta.png')}
                    />
                    <Text style={{color: 'grey', fontSize: 15}}>Conta</Text>
              </View>
              <Text style={{color: 'grey', fontSize: 15, marginLeft: 20}}>Saldo disponível</Text>
              <Text style={{color: '#000', fontSize: 25,fontWeight:'bold', marginLeft: 20, marginTop: 5}}>R$  15.850.000</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View  style={styles.rewards}> 
               <View style={{ flexDirection: 'row',alignItems: 'center',
                            marginTop: 20,}}>

                    <View style={{borderWidth: 1, borderRadius: 50,borderColor: '#D6A2E8', backgroundColor:'#D6A2E8',
                                 alignItems: 'center',justifyContent: 'center',width: 35, height: 35, marginLeft:20 }}>
                    <Image
                        style={{height: 50, width: 50, }}
                        source={require('./src/img/rewards.png')}
                    />
                    </View>
                    <Text style={{color: '#8b10ae', fontSize: 20, marginLeft: 15}}>Rewards</Text>
               </View>
               <Text style={{fontSize: 17, marginLeft: 20, marginTop: 20}}>Apague as compras com pontos que nunca expiram.</Text>
              <TouchableOpacity style={{borderWidth: 1, alignItems:'center',justifyContent: 'center', width: 120, 
              marginLeft: 20, marginTop: 15, height: 40, borderRadius: 5,borderColor: '#8b10ae'}}>
                     <Text style={{color: '#8b10ae', fontSize: 12,textAlign: 'center',fontWeight:'bold'}}>CONHECER</Text>
              </TouchableOpacity>
        </View>
        </TouchableOpacity>


        <TouchableOpacity>
        <View  style={styles.seguro}> 
        <View style={{ flexDirection: 'row',alignItems: 'center',
                            marginTop: 20,}}>

                    <View style={{borderWidth: 1, borderRadius: 50,borderColor: '#D6A2E8', backgroundColor:'#D6A2E8',
                                 alignItems: 'center',justifyContent: 'center',width: 35, height: 35, marginLeft:20 }}>
                    <Image
                        style={{height: 50, width: 50, }}
                        source={require('./src/img/seguro.png')}
                    />
                    </View>
                    <Text style={{color: '#8b10ae', fontSize: 20, marginLeft: 15}}>Rewards</Text>
               </View>
               <Text style={{fontSize: 17, marginLeft: 20, marginTop: 20}}>Conheça Nubank Vida: um seguro simples e que cabe no bolso.</Text>
              <TouchableOpacity style={{borderWidth: 1, alignItems:'center',justifyContent: 'center', width: 120, 
              marginLeft: 20, marginTop: 15, height: 40, borderRadius: 5,borderColor: '#8b10ae'}}>
                     <Text style={{color: '#8b10ae', fontSize: 12,textAlign: 'center',fontWeight:'bold'}}>CONHECER</Text>
              </TouchableOpacity>
        </View>
        </TouchableOpacity>

      </View>

      </ScrollView>

      <View style={styles.rodape}>
      <ScrollView 
      horizontal={true}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      >

        <View  style={styles.pix}> 
            <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/pix.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 35, marginLeft: 12}}>Pix</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.pagar}> 
           <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/bar1.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 35, marginLeft: 12}}>Pagar</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.indicar}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/indicar.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 19, marginLeft: 12}}>Indicar Amigos</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.transfer}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/tr.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 35, marginLeft: 12}}>Transferir</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.depositar}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/depositar.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 35, marginLeft: 12}}>Depositar</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.cartao}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/cartao.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 19, marginLeft: 12}}>Cartão Virtual</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.recarga}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/recarga.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 19, marginLeft: 12}}>Recarga de Celular</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.limite}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/limite.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 19, marginLeft: 12}}>Ajustar Limite</Text>
            </TouchableOpacity>
        </View>

        <View  style={styles.bloquear}> 
        <TouchableOpacity>
              <Image 
              style={{height: 45,width: 50}}
              source={require('./src/img/bloquear.png')}/>
              <Text style={{fontSize:13,color: '#fff', marginTop: 19, marginLeft: 12}}>Bloquear Cartão</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
        
      </View>
  
</View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8b10ae',
    },
    header:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 5,
        height: 80,
        width: 360,
    },
    btnolho:{
        borderWidth: 1,
        borderColor: '#be2edd',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        width: 45,
        height: 45,
        backgroundColor: '#be2edd' 
    },
    btnconf:{
      borderWidth: 1,
      borderColor: '#be2edd',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 45,
      height: 45,
      backgroundColor: '#be2edd' 
  },
    olho:{
        height: 80,
        width: 70,
    },
    conf:{
      height: 40,
      width: 60
    },
    corpo:{
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 5,
      width: 360,
      borderRadius: 5
    },
    credito:{
      backgroundColor:'#fff',
      height: 170,
      width: 360,
      borderRadius: 5,
   },
   conta:{
        backgroundColor:'#fff',
        height: 140,
        width: 360,
        marginTop: 15,
        borderRadius: 5
    },
    rewards:{
      backgroundColor:'#fff',
      height: 195,
      width: 360,
      borderRadius: 5,
      marginTop: 15
    },
    seguro:{
      backgroundColor:'#fff',
      height: 195,
      width: 360,
      borderRadius: 5,
      marginTop: 15
    },
    rodape:{
      marginTop: 40,
      flexDirection: 'row',
      height: 130,
      width: 360
    },
    pix:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    pagar:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    indicar:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    transfer:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    depositar:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    cartao:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    recarga:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    limite:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    },
    bloquear:{
      backgroundColor: '#be2edd',
      borderRadius: 5,
      height: 105,
      width: 95,
      marginRight: 10
    }

});

export default App;