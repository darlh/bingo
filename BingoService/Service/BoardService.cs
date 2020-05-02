using AutoMapper;
using BingoData.Interface;
using BingoData.Model;
using BingoService.Interface;
using BingoService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoService.Service
{
    public class BoardService : IBoardService
    {
        private readonly IBoardData _gameData;
        private readonly IMapper _mapper;
        public BoardService(IBoardData gameData, IMapper mapper)
        {
            _gameData = gameData;
            _mapper = mapper;
        }

        public async Task<BoardModel> GetGameBoardById(long id)
        {
            try
            {
                var board = _mapper.Map<BoardModel>(await Task.Run(() => _gameData.GetBoardByIdAsync(id)));
                return board;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<ICollection<BoardModel>> GetBoards()
        {
            try
            {
                return _mapper.Map<ICollection<BoardModel>>(await Task.Run(() => _gameData.GetBoards()));
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<BoardModel> CreateBoard(BoardModel gameBoard)
        {
            try
            {
                return _mapper.Map<BoardModel>(await Task.Run(() => _gameData.CreateBoardAsync(_mapper.Map<GameBoard>(gameBoard))));
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<BoardModel> EditBoard(BoardModel boardModel)
        {
            try
            {
                return _mapper.Map<BoardModel>(await Task.Run(() => _gameData.UpdateBoardAsync(_mapper.Map<GameBoard>(boardModel))));
            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
