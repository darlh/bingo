using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using BingoData.Model;
using BingoService.Model;

namespace BingoService.Mapping
{
    public class GameMapping : Profile
    {
        public GameMapping()
        {
            //Data Model to Entity Model
            CreateMap<GameBoard, BoardModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.Author, opts => opts.MapFrom(src => src.Author))
                .ForMember(dest => dest.Tiles, opts => opts.MapFrom(src => src.GameTile));

            CreateMap<GameBoard, CardModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.Tiles, opts => opts.MapFrom(src => src.GameTile));

            CreateMap<GameTile, BoardTileModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Order, opts => opts.MapFrom(src => src.Order))
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content));

            CreateMap<GameTile, CardTileModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content));

            //Entity Model to Data Model
            CreateMap<BoardModel, GameBoard>()
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.Author, opts => opts.MapFrom(src => src.Author))
                .ForMember(dest => dest.GameTile, opts => opts.MapFrom(src => src.Tiles));

            CreateMap<BoardTileModel, GameTile>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Order, opts => opts.MapFrom(src => src.Order))
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content));
        }
    }
}
