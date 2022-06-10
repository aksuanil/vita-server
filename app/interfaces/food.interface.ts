export interface IFood {
    foodName: String,
    foodNameTurkish: String,
    nutrients: {
        protein: {
            value: Number,
            unitName: String,
        },
        fat: {
            value: Number,
            unitName: String,
        },
        carbohydrates: {
            value: Number,
            unitName: String,
        },
        energy: {
            value: Number,
            unitName: String,
        },
    },
    vitamins: {
        vitaminA: {
            value: Number,
            unitName: String,
        },
        vitaminB1: {
            value: Number,
            unitName: String,
        },
        vitaminB2: {
            value: Number,
            unitName: String,
        },
        vitaminB3: {
            value: Number,
            unitName: String,
        },
        vitaminB6: {
            value: Number,
            unitName: String,
        },
        vitaminB12: {
            value: Number,
            unitName: String,
        },
        vitaminC: {
            value: Number,
            unitName: String,
        },
        vitaminD: {
            value: Number,
            unitName: String,
        },
        vitaminE: {
            value: Number,
            unitName: String,
        },
        vitaminK: {
            value: Number,
            unitName: String,
        }
    },
    minerals: {
        calcium: {
            value: Number,
            unitName: String,
        },
        iron: {
            value: Number,
            unitName: String,
        },
        magnesium: {
            value: Number,
            unitName: String,
        },
        phosphorus: {
            value: Number,
            unitName: String,
        },
        potassium: {
            value: Number,
            unitName: String,
        },
        sodium: {
            value: Number,
            unitName: String,
        },
        zinc: {
            value: Number,
            unitName: String,
        },
        copper: {
            value: Number,
            unitName: String,
        },
        selenium: {
            value: Number,
            unitName: String,
        },
    },
    misc: {
        water: {
            value: Number,
            unitName: String,
        },
        sugar: {
            value: Number,
            unitName: String,
        },
        caffeine: {
            value: Number,
            unitName: String,
        },
        alcohol: {
            value: Number,
            unitName: String,
        },
        caroteneAlpha: {
            value: Number,
            unitName: String,
        },
        caroteneBeta: {
            value: Number,
            unitName: String,
        },
        folicAcid: {
            value: Number,
            unitName: String,
        },
        cholesterol: {
            value: Number,
            unitName: String,
        },
        choline: {
            value: Number,
            unitName: String,
        },
        lycopene: {
            value: Number,
            unitName: String,
        },
    },
    foodMesaures: {
        measure: String,
        gramWeight: Number,
    },
};