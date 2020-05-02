using BingoData.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoData.Interface
{
    public interface IBoardData
    {
        Task<GameBoard> GetBoardByIdAsync(long gameBoardId);
        Task<ICollection<GameBoard>> GetBoards();
        Task<GameBoard> CreateBoardAsync(GameBoard board);
        Task<GameBoard> UpdateBoardAsync(GameBoard board);
    }
}
