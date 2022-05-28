﻿// <auto-generated />
using GraphServer.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GraphServer.Migrations.LeaderBoardsMigrations
{
    [DbContext(typeof(LeaderBoardsContext))]
    [Migration("20220528185622_ScoreIndex")]
    partial class ScoreIndex
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("GraphServer.Models.Leader", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<int>("GameType")
                        .HasColumnType("int");

                    b.Property<string>("NickName")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("varchar(20)");

                    b.Property<uint>("Score")
                        .HasColumnType("int unsigned");

                    b.HasKey("Id");

                    b.HasIndex("Score");

                    b.ToTable("LeaderBoards");
                });
#pragma warning restore 612, 618
        }
    }
}
