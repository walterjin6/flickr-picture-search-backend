const axios = require('axios')

const getPicturePublic = async (req, res) => {
  const flickrHome = `http://api.flickr.com/services/rest/?format=json&sort=random&method=flickr.photos.search&tags=sun&tag_mode=all&api_key=${process.env.FLICKR_API_KEY}&nojsoncallback=1`
  const data = await getData()
  let items = []
  async function getData() {
    try {
      const response = await axios.get(flickrHome)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
  const photos = data?.photos?.photo
  if (photos?.length > 0) {
    photos.forEach(function (photo) {
      items.push({
        id: photo.id,
        url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
        title: photo.title,
      })
    })

    var response = {
      status: 'Success',
      code: 200,
      data: {
        searchTitle: 'Looking for image?',
        items: items,
      },
    }
  } else {
    var response = {
      status: 'Error',
      code: 400,
    }
  }
  return res.json(response)
}

const getPicturePrivate = async (req, res) => {
  const tags = req.body.input.input
  const flickrHome = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`
  let data = await getData()
  let items = []
  async function getData() {
    try {
      const response = await axios.get(flickrHome)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  if (data) {
    for (let i = 0; i < data.items.length; i++) {
      let obj = {
        id: i + 1,
        title: data.items[i].title,
        url: data.items[i].media.m,
      }
      items.push(obj)
    }
    var response = {
      status: 'Success',
      code: 200,
      data: {
        searchTitle: data.title,
        items: items,
      },
    }
  } else {
    var response = {
      status: 'Error',
      code: 400,
    }
  }
  return res.json(response)
}

module.exports = {
  getPicturePrivate,
  getPicturePublic,
}
