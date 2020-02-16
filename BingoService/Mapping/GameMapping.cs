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
            CreateMap<GameBoard, GameBoardModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opts => opts.MapFrom(src => src.Title))
                .ForMember(dest => dest.Tiles, opts => opts.MapFrom(src => src.GameTile));

            CreateMap<GameTile, TileModel>()
                .ForMember(dest => dest.Id, opts => opts.MapFrom(src => src.Id))
                .ForMember(dest => dest.Content, opts => opts.MapFrom(src => src.Content));
        }
    }
}
