# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

collection = Collection.create(name: 'POP')

collection.funkos.build(name:'Loki', image:"https://images-na.ssl-images-amazon.com/images/I/51pdMsEXc9S.__AC_SX300_SY300_QL70_FMwebp_.jpg", series:'Marvel Studios', wishlist: false)
collection.funkos.build(name:'President Loki', image: "https://i.ibb.co/583pHRn/President-Lokiresize-1.jpg", series: 'Marvel Studios', wishlist: false)
collection.funkos.build(name:'Sylvie', image:"https://i.ibb.co/LJGbsr4/Sylvie-Resize-1.jpg", series: 'Marvel Studios', wishlist: false)

collection.save 