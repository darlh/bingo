using BingoService.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BingoService.Interface
{
    public interface ICardService
    {
        public Task<CardModel> GetRandomGameCardById(long id);
    }
}
