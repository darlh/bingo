using BingoService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoService.Interface
{
    public interface IGameService
    {
        public Task<GameBoardModel> GetGameBoardById(long id);
        public Task<ICollection<GameBoardModel>> GetGames();
    }
}
