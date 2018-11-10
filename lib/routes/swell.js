import swellHeight from '../swell-height'

const swellRoute = {
  method: 'GET',
  path: '/api/swells',
  handler: (request, h) => {
    const { latitude, longitude } = request.query

    return swellHeight
      .fetchSwellHeights(latitude, longitude)
      .then(swells => {
        return swells
      })
      .catch(error => {
        console.error(error)
        return {}
      })
  }
}

export default swellRoute
