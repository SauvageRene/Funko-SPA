# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

collection = Collection.create(name: 'POP')

collection.funkos.build(name:'Loki', image:"https://images-na.ssl-images-amazon.com/images/I/51pdMsEXc9S.__AC_SX300_SY300_QL70_FMwebp_.jpg", series:'Marvel Studios')
collection.funkos.build(name:'President Loki', image: "https://media.entertainmentearth.com/assets/images/5ae6258cc11a4ba0851194aba01b6986xl.jpg", series: 'Marvel Studios')
collection.funkos.build(name:'Sylvie', image:"https://static.thcdn.com/images/large/original//productimg/1600/1600/12906470-8594873880764440.jpg", series: 'Marvel Studios')

collection.save 