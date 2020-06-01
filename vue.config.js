module.exports = {

  css: {

    loaderOptions: {

      sass: {

        prependData: `@import "@/sass/_variables.sass"`

      }

    }

  },
  chainWebpack: (config) => {

    config
      .plugin('html')
      .tap((args) => {

        args[0].title = 'Vue CLI starter kit'
        args[0].description = 'Vue CLI starter kit description'
        args[0].themeColor = '#ff0000'

        return args

      })

  }

}