import axios from 'axios'
import BaseApiService from './base'

class CarrierService extends BaseApiService {
  
  saveWaypoints (gameId, carrierId, waypoints) {
    return axios.put(this.BASE_URL + 'game/' + gameId + '/carrier/' + carrierId + '/waypoints', 
        waypoints,
    { withCredentials: true })
  }
  
  loopWaypoints (gameId, carrierId, loop) {
    return axios.put(this.BASE_URL + 'game/' + gameId + '/carrier/' + carrierId + '/waypoints/loop', 
      loop,
    { withCredentials: true })
  }

  transferShips (gameId, carrierId, carrierShips, starId, starShips) {
    return axios.put(this.BASE_URL + 'game/' + gameId + '/carrier/' + carrierId + '/transfer', 
        {
          carrierId,
          carrierShips,
          starId,
          starShips
        },
    { withCredentials: true })
  }

}

export default new CarrierService()
