using BingoService.Interface;
using BingoData.Interface;
using System;
using BingoService.Model;
using System.Threading.Tasks;
using AutoMapper;
using System.Linq;
using System.Collections.Generic;

namespace BingoService.Service
{
    public class GameService : IGameService
    {
        private readonly IGameData _gameData;
        private readonly IMapper _mapper;
        public GameService(IGameData gameData, IMapper mapper)
        {
            _gameData = gameData;
            _mapper = mapper;
        }

        public async Task<GameBoardModel> GetGameBoardById(long id)
        {
            try 
            {
                var board = _mapper.Map<GameBoardModel>(await Task.Run(() => _gameData.GetGameBoardByIdAsync(id)));
                board.Tiles = GenerateRandomGameCard(board.Tiles);
                return board;
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public async Task<ICollection<GameBoardModel>> GetGames()
        {
            try
            {
                return _mapper.Map<ICollection<GameBoardModel>>(await Task.Run(() => _gameData.GetGames()));
            }
            catch(Exception e)
            {
                throw e;
            }
        }

        private ICollection<TileModel> GenerateRandomGameCard(ICollection<TileModel> tiles)
        {
            //Shuffle the tiles
            int n = tiles.Count;
            var rnd = new Random();
            var array = tiles.ToList();
            while (n > 1)
            {
                int k = rnd.Next(n--);
                TileModel temp = array[n];
                array[n] = array[k];
                array[k] = temp;
            }
            //Take top 25
            array = array.Take(25).ToList();
            //Assign coordinates
            int i = 0;
            for(int x = 1; x <= 5; x++)
            {
                for(int y = 1; y <= 5; y++)
                {
                    array[i].XCoordinate = x;
                    array[i].YCoordinate = y;
                    i++;
                }
            }
            tiles = array;
            return tiles;
        }
    }
}
