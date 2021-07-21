class FunkosController < ApplicationController
  before_action :set_funko, only: [:show, :update, :destroy]

  # GET /funkos
  def index
    funkos = Funko.all

    render json: funkos
  end

  # GET /funkos/1
  def show
    render json: @funko
  end

  # POST /funkos
  def create
    @funko = Funko.new(funko_params)

    if @funko.save
      render json: @funko, status: :created, location: @funko
    else
      render json: @funko.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /funkos/1
  def update
    if @funko.update(funko_params)
      render json: @funko
    else
      render json: @funko.errors, status: :unprocessable_entity
    end
  end

  # DELETE /funkos/1
  def destroy
    @funko.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_funko
      @funko = Funko.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def funko_params
      params.require(:funko).permit(:name, :image, :series)
    end
end
