class Api::FunkosController < ApplicationController
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
    @collection = Collection.find_by_id(params[:collection_id])
    @funko = @collection.funkos.build(funko_params)

    if @funko.save
      render json: @funko, status: :created
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
    if @funko.destroy
      render json:{message: "Successfully deleted"}
    else
      render json:{message: "Failed to delete"}
    end
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
