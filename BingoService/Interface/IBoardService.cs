using BingoService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoService.Interface
{
    public interface IBoardService
    {
        public Task<BoardModel> GetGameBoardById(long boardId);
        public Task<ICollection<BoardModel>> GetBoards();
        public Task<BoardModel> CreateBoard(BoardModel boardModel);
        public Task<BoardModel> EditBoard(BoardModel boardModel);
        //public Task<BoardModel> DeleteBoard(long boardId);
    }
}
