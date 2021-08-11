# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

collection = Collection.create(name: 'Pop Collection Guide')


collection.funkos.build(name:'Loki #895', image:"https://images-na.ssl-images-amazon.com/images/I/51pdMsEXc9S.__AC_SX300_SY300_QL70_FMwebp_.jpg", series:'Marvel Studios', wishlist: false)
collection.funkos.build(name:'President Loki #898', image: "https://i.ibb.co/583pHRn/President-Lokiresize-1.jpg", series: 'Marvel Studios', wishlist: false)
collection.funkos.build(name:'Sylvie #897', image:"https://i.ibb.co/LJGbsr4/Sylvie-Resize-1.jpg", series: 'Marvel Studios', wishlist: false)

collection.funkos.build(name:'DumbleDore #15', image:"https://i.ibb.co/Fm3cF9j/dumbledore-2.jpg", series:'Harry Potter', wishlist: false)
collection.funkos.build(name:'Harry Potter in Invisibility Cloak #111', image:"https://i.ibb.co/5cCrLgW/resizedharrypotter.jpg", series:'Harry Potter', wishlist: false)
collection.funkos.build(name:'Ron Weasley #121', image:'https://i.ibb.co/7Jqt8MV/Ron-Weasly-1.jpg', series:'Harry Potter', wishlist: false)

collection.funkos.build(name:'Blue Spirit #1002', image:'https://i.ibb.co/R0ZQRML/blue-Spiritfunko-1.jpg', series:'Avatar', wishlist:"false")

collection.save
