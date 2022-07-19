var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
function getUsdaDataByName(searchInput) {
    return __awaiter(this, void 0, void 0, function* () {
        let foodArray = [];
        const response = yield fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=TRhDyoQ0vVrhRDZcaTMNUqWW8m684m0M5mt2hf7c&query=${searchInput}&dataType=Survey%20%28FNDDS%29`);
        const result = yield response.json();
        Promise.all(result.foods.slice(0, 10).map((item) => __awaiter(this, void 0, void 0, function* () {
            const food = {
                foodName: '',
                foodNameTurkish: '',
                nutrients: {
                    protein: {
                        value: 0,
                        unitName: ''
                    },
                    fat: {
                        value: 0,
                        unitName: ''
                    },
                    carbohydrates: {
                        value: 0,
                        unitName: ''
                    },
                    energy: {
                        value: 0,
                        unitName: ''
                    }
                },
                vitamins: {
                    vitaminA: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminB1: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminB2: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminB3: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminB6: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminB12: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminC: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminD: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminE: {
                        value: 0,
                        unitName: ''
                    },
                    vitaminK: {
                        value: 0,
                        unitName: ''
                    }
                },
                minerals: {
                    calcium: {
                        value: 0,
                        unitName: ''
                    },
                    iron: {
                        value: 0,
                        unitName: ''
                    },
                    magnesium: {
                        value: 0,
                        unitName: ''
                    },
                    phosphorus: {
                        value: 0,
                        unitName: ''
                    },
                    potassium: {
                        value: 0,
                        unitName: ''
                    },
                    sodium: {
                        value: 0,
                        unitName: ''
                    },
                    zinc: {
                        value: 0,
                        unitName: ''
                    },
                    copper: {
                        value: 0,
                        unitName: ''
                    },
                    selenium: {
                        value: 0,
                        unitName: ''
                    }
                },
                misc: {
                    water: {
                        value: 0,
                        unitName: ''
                    },
                    sugar: {
                        value: 0,
                        unitName: ''
                    },
                    caffeine: {
                        value: 0,
                        unitName: ''
                    },
                    alcohol: {
                        value: 0,
                        unitName: ''
                    },
                    caroteneAlpha: {
                        value: 0,
                        unitName: ''
                    },
                    caroteneBeta: {
                        value: 0,
                        unitName: ''
                    },
                    folicAcid: {
                        value: 0,
                        unitName: ''
                    },
                    cholesterol: {
                        value: 0,
                        unitName: ''
                    },
                    choline: {
                        value: 0,
                        unitName: ''
                    },
                    lycopene: {
                        value: 0,
                        unitName: ''
                    }
                },
                foodMesaures: {
                    measure: '',
                    gramWeight: 0
                }
            };
            food.foodName = item.description;
            // food.foodNameTurkish = await translate(food.foodName, { to: 'tr' });
            item.foodNutrients.map((item) => {
                if (item.nutrientId == 1003) // protein
                    food.nutrients.protein = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1004) // fat 
                    food.nutrients.fat = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1005) // Carbohydrate
                    food.nutrients.carbohydrates = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1008) // Energy
                    food.nutrients.energy = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1106) // A
                    food.vitamins.vitaminA = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1109) // E 
                    food.vitamins.vitaminE = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1114) // D
                    food.vitamins.vitaminD = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1162) // C
                    food.vitamins.vitaminC = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1175) // B6
                    food.vitamins.vitaminB6 = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1178) // B12
                    food.vitamins.vitaminB12 = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1185) // K
                    food.vitamins.vitaminK = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1165) // B1
                    food.vitamins.vitaminB1 = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1166) // B2
                    food.vitamins.vitaminB2 = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1167) // B3
                    food.vitamins.vitaminB3 = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1087) // Calcium
                    food.minerals.calcium = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1089) // Iron
                    food.minerals.iron = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1090) // magnesium
                    food.minerals.magnesium = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1091) // phosphorus
                    food.minerals.phosphorus = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1092) // potassium
                    food.minerals.potassium = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1093) // sodium
                    food.minerals.sodium = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1095) // zinc
                    food.minerals.zinc = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1098) // copper
                    food.minerals.copper = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1103) // selenium
                    food.minerals.selenium = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1051) // water
                    food.misc.water = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 2000) // sugar
                    food.misc.sugar = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1057) // caffeine
                    food.misc.caffeine = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1018) // alcohol
                    food.misc.alcohol = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1108) // caroteneAlpha
                    food.misc.caroteneAlpha = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1107) // caroteneBeta
                    food.misc.caroteneBeta = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1186) // folicAcid
                    food.misc.folicAcid = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1253) // cholesterol
                    food.misc.cholesterol = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1180) // choline
                    food.misc.choline = { "value": item.value, "unitName": item.unitName };
                else if (item.nutrientId == 1122) // lycopene
                    food.misc.lycopene = { "value": item.value, "unitName": item.unitName };
            });
            item.foodMeasures.slice(0, 5).map((item) => {
                food.foodMesaures.measure = item.disseminationText;
                food.foodMesaures.gramWeight = item.gramWeight;
                // measureArr.push({ measure: measure, gramWeight: gramWeight });
            });
            foodArray.push(food);
        })));
        return foodArray;
    });
}
export { getUsdaDataByName };
