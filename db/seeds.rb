zoos_data = JSON.parse(File.read("db/zoos_data.json"))
mammals_data = JSON.parse(File.read("db/mammals_data.json"))
reptiles_data = JSON.parse(File.read("db/reptiles_data.json"))
Zoo.destroy_all
Mammal.destroy_all
Reptile.destroy_all
zoo = Zoo.create!(zoos_data[0])
mammals = zoo.mammals.create!(mammals_data)
reptiles = zoo.reptiles.create!(reptiles_data)
