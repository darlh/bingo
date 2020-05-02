using System.Threading.Tasks;
using BingoService.Interface;
using BingoService.Model;
using Microsoft.AspNetCore.Mvc;

namespace BingoApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class BoardController : Controller
    {
        private readonly IBoardService _boardService;
        public BoardController(IBoardService boardService)
        {
            _boardService = boardService;
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id) => await GetNewGame(id);

        [HttpGet]
        public async Task<IActionResult> Get() => await GetBoards();

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] BoardModel model) => await CreateBoard(model);

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody] BoardModel model) => await EditBoard(model);

        private async Task<IActionResult> GetNewGame(long id)
        {
            return Ok(await _boardService.GetGameBoardById(id));
        }
        private async Task<IActionResult> GetBoards()
        {
            return Ok(await _boardService.GetBoards());
        }
        private async Task<IActionResult> CreateBoard(BoardModel model)
        {
            return Ok(await _boardService.CreateBoard(model));
        }
        private async Task<IActionResult> EditBoard(BoardModel model)
        {
            return Ok(await _boardService.EditBoard(model));
        }
    }
}