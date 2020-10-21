import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../style/CalculatorStyle';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: '',
      calc: '',
    };
  }

  input(char) {
    this.setState({calc: this.state.calc + char});
  }

  addOperator(char) {
    const str = this.state.calc;
    const addedStr = str.substring(0, str.length - 1) + char;
    if (str !== '') {
      if (
        str.endsWith('+') ||
        str.endsWith('-') ||
        str.endsWith('*') ||
        str.endsWith('/') ||
        str.endsWith('%') ||
        str.endsWith('**')
      ) {
        this.setState({calc: addedStr});
      } else {
        this.input(char);
        try {
          const result = eval(this.state.calc);
          this.setState({result: result});
        } catch (error) {
          alert('Error', error);
          this.clear();
        }
      }
    } else if (str == '' && this.state.result !== '') {
      this.setState({calc: this.state.result + char, result: ''});
    }
  }

  del() {
    const str = this.state.calc;
    const deleted = str.substring(0, str.length - 1);
    this.setState({calc: deleted});
  }

  sum() {
    const str = this.state.calc;
    var sumStr = '';
    if (
      str.endsWith('+') ||
      str.endsWith('-') ||
      str.endsWith('*') ||
      str.endsWith('/') ||
      str.endsWith('%') ||
      str.endsWith('**')
    ) {
      sumStr = str.substring(0, str.length - 1);
    } else {
      sumStr = str;
    }
    try {
      const result = eval(sumStr);
      this.setState({result: result});
      this.setState({calc: result});
    } catch (error) {
      alert(error);
      this.clear();
    }
  }

  clear() {
    this.setState({calc: '', result: ''});
  }

  render() {
    return (
      <View style={styles.all}>
        <View style={styles.inputan}>
          <Text style={styles.input}>{this.state.calc}</Text>
          <Text>{this.state.result}</Text>
        </View>
        <View style={styles.background}>
          <View style={styles.layer}>
            <TouchableOpacity
              onPress={() => this.clear()}
              style={styles.button}>
              <Text style={styles.number}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('%')}
              style={styles.button}>
              <Text style={styles.number}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('**')}
              style={styles.button}>
              <Text style={styles.number}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.del()} style={styles.button}>
              <Text style={styles.number}>Del</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.layer}>
            <TouchableOpacity
              onPress={() => this.input(7)}
              style={styles.button}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(8)}
              style={styles.button}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(9)}
              style={styles.button}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('+')}
              style={styles.button}>
              <Text style={styles.number}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.layer}>
            <TouchableOpacity
              onPress={() => this.input(4)}
              style={styles.button}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(5)}
              style={styles.button}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(6)}
              style={styles.button}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('-')}
              style={styles.button}>
              <Text style={styles.number}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.layer}>
            <TouchableOpacity
              onPress={() => this.input(1)}
              style={styles.button}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(2)}
              style={styles.button}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.input(3)}
              style={styles.button}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('*')}
              style={styles.button}>
              <Text style={styles.number}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.layer}>
            <TouchableOpacity
              onPress={() => this.input(0)}
              style={styles.button}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.addOperator('/')}
              style={styles.button}>
              <Text style={styles.number}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.sum()} style={styles.button}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
