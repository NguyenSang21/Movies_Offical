import fetch from 'isomorphic-fetch'
import axios from 'axios'
import { url } from '../variables/general'
export default class {
  static async _getData_1() {
    const res = await fetch(`${url}collection/Limit/22`)
    const data = await res.json()
    return data
  }

  static async _getData_2() {
    const res = await fetch(`${url}collection/Limit/6`)
    const data = await res.json()
    return data
  }

  static async _getData_3() {
    const res = await fetch(`${url}collection/Limit/10`)
    const data = await res.json()
    return data
  }

  static async _getData_4() {
    const res = await fetch(`${url}collection/Limit/5`)
    const data = await res.json()
    return data
  }

  static async _getData_5() {
    const res = await fetch(`${url}collection/Limit/5`)
    const data = await res.json()
    return data
  }

  static async _getData_6() {
    const res = await fetch(`${url}collection/Limit/4`)
    const data = await res.json()
    return data
  }

  static async _getData_8() {
    const res = await fetch(`${url}collection/Limit/22`)
    const data = await res.json()
    return data
  }

  static async _getData_9() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      return null
    }
  }

  static async _getData_10() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_11() {
    try {
      const response = await axios.get(`${url}collection/Limit/2`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_12() {
    const res = await fetch(`${url}collection/Limit/10`)
    const data = await res.json()
    return data
  }

  static async _getData_13() {
    try {
      const response = await axios.get(`${url}collection/Limit/5`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }

  static async _getData_14() {
    try {
      const response = await axios.get(`${url}collection/Limit/14`);
      const data = response.data;
      return data
    } catch (error) {
      console.log(error);
      return null
    }
  }
}