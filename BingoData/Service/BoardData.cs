using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BingoData.Interface;
using BingoData.Model;
using Microsoft.EntityFrameworkCore;

namespace BingoData.Service
{
    public class BoardData : IBoardData
    {
        private readonly BingoDBContext _context;
        public BoardData(BingoDBContext context)
        {
            _context = context;
        }

        public async Task<GameBoard> GetBoardByIdAsync(long gameBoardId)
        {
            return await Task.Run(() => 
                _context.GameBoard
                .Include(gameBoard => gameBoard.GameTile)
                .SingleOrDefaultAsync(gameBoard => gameBoard.Id.Equals(gameBoardId)));
        }
        public async Task<ICollection<GameBoard>> GetBoards()
        {
            return await Task.Run(() => _context.GameBoard.ToListAsync());
        }
        public async Task<GameBoard> CreateBoardAsync(GameBoard board)
        {
            try
            {
                _context.GameBoard.Add(board);
                await _context.SaveChangesAsync();
                return board;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public async Task<GameBoard> UpdateBoardAsync(GameBoard updatedBoard)
        {
            try
            {
                var existingBoard = _context.GameBoard
                    .Where(b => b.Id == updatedBoard.Id)
                    .Include(b => b.GameTile)
                    .AsNoTracking()
                    .SingleOrDefault();
                
                _context.GameBoard.Attach(updatedBoard);
                _context.Entry(updatedBoard).State = EntityState.Modified;
                foreach (GameTile tile in existingBoard.GameTile)
                {
                    _context.Entry(tile).State = EntityState.Deleted;
                }
                foreach (GameTile tile in updatedBoard.GameTile)
                {
                    _context.Entry(tile).State = tile.Id == 0 ? EntityState.Added : EntityState.Modified;
                }

                await _context.SaveChangesAsync();
                return updatedBoard;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public async Task<GameBoard> DeleteBoardAsync(long gameBoardId)
        {
            try
            {
                var board = _context.GameBoard
                    .Include(g => g.GameTile)
                    .First(g => g.Id == gameBoardId);
                _context.GameBoard.Remove(board);
                await _context.SaveChangesAsync();
                return board;
            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
