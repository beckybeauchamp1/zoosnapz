zoos_data = JSON.parse(File.read("db/zoos_data.json"))
mammals_data = JSON.parse(File.read("db/mammals_data.json"))
reptiles_data = JSON.parse(File.read("db/reptiles_data.json"))
Zoo.destroy_all
Mammal.destroy_all
Reptile.destroy_all
var zoo = Zoo.create!(zoos_data)
zoo.mammals.create!(mammals_data)
zoo.reptiles.create!(reptiles_data)
