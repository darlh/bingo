using Microsoft.EntityFrameworkCore;
using BingoData;
using BingoData.Model;

namespace BingoData
{
    public partial class BingoDBContext : DbContext { 
    public BingoDBContext()
    {
    }

    public BingoDBContext(DbContextOptions<BingoDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<GameBoard> GameBoard { get; set; }
    public virtual DbSet<GameTile> GameTile { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
            modelBuilder.Entity<GameBoard>(entity =>
            {
                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsFixedLength();

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsFixedLength();
            });

            modelBuilder.Entity<GameTile>(entity =>
            {
                entity.Property(e => e.Content).IsRequired();

                entity.HasOne(d => d.GameBoard)
                    .WithMany(p => p.GameTile)
                    .HasForeignKey(d => d.GameBoardId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_GameBoard");

                entity.Property(e => e.Order).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
}
