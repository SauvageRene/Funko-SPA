class Api::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = review.all

    render json: @reviews, except: [:created_at, :updated_at]
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @funko = Funko.find_by_id(params[:funko_id])
    
    @review = Funko.review.build(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /review/1
  def destroy
    @funko = Funko.find_by_id(params[:funko_id])

    @review = @funko.reviews
    if @review.destroy
      render json: {message:"Successfully deleted"}
    else
      render json: {message: "Failed to delete"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:rate,:review)
    end
    
end
