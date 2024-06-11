"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const create_pokemon_dto_1 = require("./dto/create-pokemon.dto");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const mongoose_2 = require("mongoose");
let PokemonService = class PokemonService {
    constructor(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        this.defaultLimit = configService.get('defaultLimit');
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLowerCase();
        try {
            const pokemon = await this.pokemonModel.create(createPokemonDto);
            return pokemon;
        }
        catch (error) {
            this.handleErrors(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = this.defaultLimit, offset = 0 } = paginationDto;
        return await this.pokemonModel
            .find()
            .limit(limit)
            .skip(offset)
            .sort({ no: 1 })
            .select('-__v');
    }
    async findOne(term) {
        let pokemon;
        if (!isNaN(+term)) {
            pokemon = await this.pokemonModel.findOne({ no: +term });
        }
        else {
            if ((0, mongoose_2.isValidObjectId)(term)) {
                pokemon = await this.pokemonModel.findById(term);
            }
            else {
                pokemon = await this.pokemonModel.findOne({
                    name: term.toLowerCase().trim(),
                });
            }
        }
        if (!pokemon) {
            throw new common_1.NotFoundException(`Pokemon not found with term: ${term}`);
        }
        return pokemon;
    }
    async update(term, updatePokemonDto) {
        const pokemon = await this.findOne(term);
        if (updatePokemonDto.name) {
            updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
        }
        try {
            await pokemon.updateOne(updatePokemonDto);
            return { ...pokemon.toJSON(), ...updatePokemonDto };
        }
        catch (error) {
            this.handleErrors(error);
        }
    }
    async remove(id) {
        const { deletedCount } = await this.pokemonModel.deleteOne({
            _id: id,
        });
        if (!deletedCount) {
            throw new common_1.NotFoundException(`Pokemon not found with id: ${id}`);
        }
        return { deleted: true };
    }
    handleErrors(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Pokemon already exists: ${JSON.stringify(error.keyValue)}`);
        }
        else {
            console.log(error);
            throw new common_1.BadRequestException('Cant create pokemon. Check the logs.');
        }
    }
};
exports.PokemonService = PokemonService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pokemon_dto_1.CreatePokemonDto]),
    __metadata("design:returntype", Promise)
], PokemonService.prototype, "create", null);
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map