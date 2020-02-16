using BingoData.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoData.Interface
{
    public interface IGameData
    {
        Task<GameBoard> GetGameBoardByIdAsync(long gameBoardId);
    }
}
