using System.Collections.Generic;
using System.Threading.Tasks;
using BingoData.Interface;
using BingoData.Model;
using Microsoft.EntityFrameworkCore;

namespace BingoData.Service
{
    public class GameData : IGameData
    {
        private readonly BingoDBContext _context;
        public GameData(BingoDBContext context)
        {
            _context = context;
        }

        public async Task<GameBoard> GetGameBoardByIdAsync(long gameBoardId)
        {
            return await Task.Run(() => 
                _context.GameBoard
                .Include(gameBoard => gameBoard.GameTile)
                .SingleOrDefaultAsync(gameBoard => gameBoard.Id.Equals(gameBoardId)));
        }
        public async Task<ICollection<GameBoard>> GetGames()
        {
            return await Task.Run(() => _context.GameBoard.ToListAsync());
        }
    }
}
